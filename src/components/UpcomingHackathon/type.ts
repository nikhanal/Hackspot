export interface IhackathonProps {
    title: string
    image: string
    location?: string
    participants: number
    registrationDeadline: Date
    prizePool: number
    online?:boolean
}