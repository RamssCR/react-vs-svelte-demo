# React vs. Svelte: Dashboard de redes sociales con un Switcher de tema

## Introducción
Esta demo fue realizada con la intención de sugerir nuevas formas de realizar
proyectos frontend y generar visibilidad a librerías JS además de React. Esto
con el propósito de dejar a disposición nuevas herramientas al equipo de
desarrollo que ayuden a facilitar y agilizar desarrollos web.

Definiendo el contexto del momento, no está demás decir que React es, por
excelencia, la librería JS más popular para desarrollar sitios y aplicaciones
web sobre el resto de librerías existentes. Eso lo hace beneficiario a tener:

- Una comunidad enorme de desarrolladores.
- Un gran ecosistema de funcionalidades que, tanto el equipo de React como la propia comunidad se encargan de integrar a React.
- Infinidad de tutoriales en internet.
- Mayores ofertas de trabajo.
- Miles de librerías que ayudan a evitar a repetir código que ya ha sido optimizado por otra persona o grupo de personas.

...y un gran etc.

Sin embargo, siempre puede haber una posibilidad de que hayan personas que no se sientan
cómodas del todo usando React, al final del día, no hay librería de JS perfecta, solo la
que te ayude a crear proyectos de forma mucho más cómoda y eficiente.

En este caso, JS al poseer muchas librerías que pueden hacer mejor o peor el trabajo de React,
se decidió escoger Svelte de entre la extensa cantidad.

## ¿Por qué Svelte?
Svelte es conocido por ser una de las librerías JS más fáciles de aprender en cuanto a
sintaxis, ya que es lo más cercano a un desarrollo nativo pero con las nuevas funcionalidades
que integra, que permiten crear componentes y funcionalidades como React, dependiendo del 
renderizado del mismo.

Claro está que, se tomaron en cuenta las siguientes rúbricas para poder postular
a Svelte como uno de las librerías candidatas en esta demo como una alternativa a React.

### Estructura básica de un componente
Anteriormente, se mencionó que svelte es una de las librerías más cercanas al desarrollo nativo,
como Vue, por ejemplo, pero integrando sus propias funcionalidades que permitan manejar la UI
como cualquier librería de JS lo hace actualmente, dicha similitud se encuentra en la forma en 
la que creamos un componente de svelte.

En React, las formas convencionales de crear un componente exportable e importarlo son las siguientes:

#### Forma 1
```JSX
function Component(props) {
    // Tu lógica aquí

    return (
        <h1>Hello World</h1>
    )
}
export default Component

// o también...
export default function Component(props) {
    // Tu lógica aquí

    return (
        <h1>Hello World</h1>
    )
}

// Al importar
import Component from './Component'

export default function App() {
    return (
        <div>
            <h1>Este es un componente JSX de React</h1>
            <Component />
        </div>
    )
}
```

#### Forma 2
```JSX
export const Component = (props) => {
    // Tu lógica aquí

    return (
        <h1>Hello World</h1>
    )
}

// O si no quieres integrar lógica del componente y solo renderizar UI...
export const Component = (props) => (
    <h1>Hello World</h1>
)

// Al importar
import { Component } from './Component'

export const App = () => (
    <div>
        <h1>Este es un componente JSX de React</h1>
        <Component />
    </div>
)
```
Debido a que React funciona bajo la estructura `.jsx`, las funciones que retornen HTML
serán tratadas como componentes funcionales, permitiendo importar y exportar como una función
común y corriente de JS.

En Svelte, por otro lado, se estructura de la siguiente forma:
```SVELTE
<script>
    // Tu lógica aquí
</script>

<!-- La UI se maneja aquí -->
<h1>Hello World</h1>

<!-- Etiqueta style por si se desean manejar estilos CSS locales -->
<style> 
    h1 {
        font-size: 2em;
    }
</style>
```
De importarse en otro componente, se haría de la siguiente forma:
```SVELTE
<script>
    import Component from './Component.svelte'
</script>

<div>
    <h1>Esto es un componente de Svelte</h1>
    <Component />
</div>
```
Svelte maneja la sintaxis nativa de HTML pero reorganizada de la siguiente forma:
- La lógica se maneja dentro de la etiqueta `<script>` al principio del componente...
- Las etiquetas de maquetación le siguen...
- Por último, si se desea manejar estilos con CSS, se pueden manejar con la etiqueta `<style>` al pie del componente. Dichos estilos se manejan de forma local y no afectan estilos exteriores de usarse etiquetas como referencia para asignar estilos en lugar de las clases o ides.

```SVELTE
<div>
    <p class="sample-paragraph">Texto de prueba</p>
</div>

<!-- Los estilos asignados al selector "div" solo afectan a las etiquetas `<div>` dentro del componente -->
<style>
    div {
        width: 200px;
        height: 50px;
    }

    div .sample-paragraph {
        color: red;
        font-weight: 700;
    }
</style>
```

### Retornar elementos hermanos
React, por convención, solo te deja retornar un solo elemento padre por componente, si deseas retornar más de
un elemento sin envolverlo en un elemento padre, debes usar los React Fragments (o `<></>`) para lograr dicho
cometido.
```JSX
// ❌ Forma incorrecta
return (
    <h1>Elemento 1</h1>
    <h2>Elemento 2</h2> {/* Lanza error porque se está retornando más de un elemento */}
)

// ✅ Forma correcta
return (
    <>
        <h1>Elemento 1</h1>
        <h2>Elemento 2</h2>
    </>
)
```

En Svelte, por otro lado, si deseas retornar más de un elemento padre, puedes hacerlo sin necesidad de utilizar
intermediarios como los React Fragments.
```SVELTE
<script>
    // scripts
</script>

<!-- Funciona sin lanzar errores -->
<h1>Elemento 1</h1>
<h2>Elemento 2</h2>
```

### Data Binding
El **Data Binding** es el mecanismo que sincroniza los datos entre la interfaz de usuario (UI) y la lógica de la
aplicación (estado). En pocas palabras, es cómo los cambios en una variable afectan lo que se muestra en la pantalla
y viceversa.

Los más usados en librerías de JS son:
1. **One-way Data Binding (Unidireccional):** La UI solo lee o solo escribe los datos.
2. **Two-way Data Binding (Bidireccional):** La UI y el estado se actualizan mutuamente en tiempo real.

| Característica   | React                                         | Svelte                                          |
|------------------|-----------------------------------------------|-------------------------------------------------|
| Unidireccional   | Usa `useState`, `useReducer`, `useContext`    | Variables normales, runas y stores (`$store`)   |
| Bidireccional    | No es nativo, se necesita `onChange`          | Nativo con `bind:value`                         |

#### Ejemplo con React
```JSX
function Sheet() {
    const [text, setText] = useState('')
    const handleChange = (e) => setText(e.target.value)

    return (
        <>
            <p>{text}</p>
            <input type="text" value={text} onChange={handleChange} />
        </>
    )
}
```

#### Ejemplo con Svelte
```SVELTE
<script>
    let text = $state('')
</script>

<p>{text}</p>
<input type="text" bind:value={text} />
```

### Soporte a TypeScript
Si necesitas crear un proyecto de Svelte con TypeScript, si usas archivos con extensión `.svelte` únicamente,
puedes indicarle a la etiqueta `<script>` que el lenguage del componente será TypeScript mediante el atributo 
`lang="ts"`, así:

```SVELTE
<script lang="ts">
    let counter: number = $state(0)
</script>
```

De no agregarse dicha etiqueta, Svelte asumirá que el lenguaje del componente será JavaScript.

### .svelte.js y .svelte.ts
Alternativamente, si no prefieres manejar el lenguaje del componente mediante el atributo `lang`,
puedes anexarle al nombre del archivo la extensión `.js` o `.ts` dependiendo del lenguaje que desees
manejar. 

### Soporte a TailwindCSS
Si manejas Vite como empaquetador web para proyectos con librerías de JS (en este caso, React o Svelte)
y necesitas manejar un framework de CSS como lo es TailwindCSS, por ejemplo, puedes instalarlo de la misma
forma que harías en un proyecto tradicional de React + Vite.

### Performance (o rendimiento)
A diferencia de React, el cual cual utiliza Virtual DOM (o mejor conocido como VDOM) para realizar
cambios de estado (por ejemplo) al DOM real, Svelte compila directamente los cambios de estado a
JavaScript nativo, logrando un mejor performance, ya que no tiene que cargar con el coste de usar
el VDOM como un intermediario para realizar cambios.

En esta demo, se realizaron pruebas de benchmark para poder evaluar, de forma básica, el performance
de ambas soluciones. En este caso, se testeó la carga inicial del componente `App` y de dos componentes
reutilizables `Image` y `Title`

> [!NOTE]
> El benchmark realizado en los componentes fue realizado en el ambiente 'development'.

Las rúbricas que se tomaron en cuenta para realizar dicho benchmark fueron las siguientes:
- **Hercios (Hertz):** Define cúantas veces la prueba se ejecuta por segundo. En otras palabras, a mayor cantidad de hercios, mejor rendimiento.
- **Min:** Es el tiempo más bajo que tomó una ejecución de la prueba en milisegundos. En otras palabras, indica el mejor caso posible de rendimiento.
- **Max:** Es el tiempo más alto que tomó una ejecución de la prueba en milisegundos. En otras palabras, indica el peor caso posible de rendimiento.
- **Media (Mean):** Es el tiempo promedio que tomó cada ejecución de la prueba en milisegundos. A menor media, mejor rendimiento, de estar cerca del tiempo mínimo, significa que el código es consistente, de lo contrario, si se acerca al tiempo máximo, significa que puede haber picos de lentitud.
- **Muestras (Samples):** Es la cantidad de veces que la prueba se ejecutó para calcular la media, es decir, mientras más muestras, los resultados serán más precisos.

He aquí los resultados:

#### App
| Librería | Hercios    | Min       | Max       | Media      | Muestras    |
|----------|------------|-----------|-----------|------------|-------------|
| React    | 138.02     | 2.23ms    | 89.7ms    | 7.25ms     | 70          |
| Svelte   | 173.76     | 2.15ms    | 31.54ms   | 5.76ms     | 88          |

#### Image
| Librería | Hercios    | Min       | Max       | Media      | Muestras    |
|----------|------------|-----------|-----------|------------|-------------|
| React    | 722.18     | 0.52ms    | 26.48ms   | 1.38ms     | 362         |
| Svelte   | 1,845.33   | 0.21ms    | 6.96ms    | 0.54ms     | 925         |

#### Title
| Librería | Hercios    | Min       | Max       | Media      | Muestras    |
|----------|------------|-----------|-----------|------------|-------------|
| React    | 1,345.47   | 0.31ms    | 10.92ms   | 0.74ms     | 673         |
| Svelte   | 1,736.67   | 0.25ms    | 6.57ms    | 0.58ms     | 869         |

> [!NOTE]
> Puedes revisar el comportamiento completo del benchmark ejecutando el comando `npm run bench` o `npm run bench:deep` si quieres ver un comportamiento más profundo de las pruebas.

### Performance (evaluado por Lighthouse)
El performance que evalúa Lighthouse puede variar mucho dependiendo de la librería que uses para desarrollar,
así como también, las buenas prácticas que implementes en tu código (aunque la evaluación no siempre es certera
y tiende a sufrir inconsistencias por posibles problemas de conexión a internet, por ejemplo).

> [!NOTE]
> El reporte realizado por lighthouse fue aplicado únicamente en el entorno 'development'.

He aquí el resultado de performance de acuerdo a los lineamientos de lighthouse de esta demo:

| Librería   | Performance (lighthouse)   |
|------------|----------------------------|
| React      | 89%                        |
| Svelte     | 95%                        |