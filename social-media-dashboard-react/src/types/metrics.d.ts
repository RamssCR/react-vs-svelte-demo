export interface TotalProps {
    readonly id?: string
    platform: string
    logo: string
    username: string
    followers: number
    type: string
    today_change: number
    increased: boolean
    color: string
}

export interface OverallProps {
    readonly id?: string
    platform: string
    type: string
    logo: string
    amount: number
    today_change: number
    increased: boolean
}