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

He aquí los resultados:

#### App
| Librería | Hercios    | Min       | Max       | Muestras    |
|----------|------------|-----------|-----------|-------------|
| React    | 138.02     | 2.23ms    | 89.7ms    | 70          |
| Svelte   | 173.76     | 2.15ms    | 31.54ms   | 88          |

#### Image
| Librería | Hercios    | Min       | Max       | Muestras    |
|----------|------------|-----------|-----------|-------------|
| React    | 722.18     | 0.52ms    | 26.48ms   | 362         |
| Svelte   | 1,845.33   | 0.21ms    | 6.96ms    | 925         |

#### Title
| Librería | Hercios    | Min       | Max       | Muestras    |
|----------|------------|-----------|-----------|-------------|
| React    | 1,345.47   | 0.31ms    | 10.92ms   | 673         |
| Svelte   | 1,736.67   | 0.25ms    | 6.57ms    | 869         |