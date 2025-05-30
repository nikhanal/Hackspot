import HackathonCard from "./HackathonCard"
import { ArrowRightIcon } from "lucide-react"
const UpcomingHackathon = () =>{
        const hackathons = [
        {
            title: "Ai in Action",
            image: "./hackathon/hack1.png",
            location: "Naxal,Kathmandu",
            participants: 199,
            registrationDeadline: new Date(2025,6,30),
            prizePool: 100000
        },
        {
            title: "Build web in web3",
            image: "./hackathon/hack2.png",
            // location: "Baneshwor,Kathmandu",
            online:true,
            participants: 199,
            registrationDeadline: new Date(2025,7,30),
            prizePool: 500000
        },
        {
            title: "AI Agent Development Kit",
            image: "./hackathon/hack3.png",
            location: "Sanepa,Lalitpur",
            participants: 199,
            registrationDeadline: new Date(2025,6,15),
            prizePool: 150000
        },
        {
            title: "Develop for the cause ",
            image: "./hackathon/hack4.png",
            location: "Pepsicola,Kathmandu",
            participants: 199,
            registrationDeadline: new Date(2025,6,10),
            prizePool: 250000
        },

    ]
    return (
        <section className="flex flex-col lg:px-28 h-[calc(80vh)] align-center justify-center gap-12 bg-gradient-to-br from-indigo-50 to-blue-50">
            <div className="flex flex-row gap-6 items-center ">
                <h1 className="text-gray-800 text-5xl font-medium">Popular Hackathons Near You</h1>
                <span className="flex text-lg items-center hover:text-purple-600 text-gray-800 underline cursor-pointer">View More Hackathons <ArrowRightIcon/></span>
            </div>
            <main className="grid md:grid-cols-2 grid-cols-1 space-x-8 space-y-8">
                {hackathons.map(hackathon=>(
                    <div className="">
                        <HackathonCard hackathon={hackathon}/>
                    </div>
                ))}
            </main>
        </section>
    )
}
export default UpcomingHackathon    