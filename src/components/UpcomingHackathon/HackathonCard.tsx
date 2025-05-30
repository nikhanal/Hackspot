import type {IhackathonProps} from './type'
import priceFormatter from '../../utils/priceFormatter'
import { MapPinned,LucideGlobe } from 'lucide-react'
//  {
//             title: "Develop for the cause ",
//             image: "./hackathon/hack4.png",
//             location: "Pepsicola,Kathmandu",
//             participants: 199,
//             registrationDeadline: new Date(2025-6-10),
//             prizePool: 250000
//         },
const todayDate = new Date()

const HackathonCard = ({hackathon}:{hackathon:IhackathonProps}) =>{
    return (
        <section className='border-purple-100 border-2 rounded-2xl p-4 border-l-8 border-l-purple-600 hover:border-purple-600 hover:scale-105 transform ease-in-out duration-350 cursor-pointer'>
                <div className='flex gap-8'>
                    <div>
                        <img className="h-40 w-40" src={hackathon.image}/>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <h1 className='text-3xl text-gray-800 font-medium'>{hackathon.title}</h1>
                        <div className='flex gap-10 items-center'>
                            <span className='rounded-full px-4 py-2 text-purple-700 bg-purple-100'>{
                            Math.ceil((hackathon.registrationDeadline.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24))} Days Remaining</span>
                            {hackathon.online?
                            <span className='flex gap-2'>
                                <LucideGlobe className='text-purple-600'/>
                                Online
                            </span>
                            :
                            <span className='flex gap-2'>
                                <MapPinned className='text-purple-600'/>
                                {hackathon.location}
                            </span>

                            }

                        </div>
                        <div className='flex gap-10'>
                            <span className='font-bold text-gray-800 text-lg'>{priceFormatter(hackathon.prizePool)}<span className='text-gray-500 font-medium'> in Prizes</span></span>
                            <span className='font-bold text-gray-800 text-lg'>{hackathon.participants}<span className='text-gray-500 font-medium'> Participants</span></span>
                        </div>
                    </div>
                </div>

        </section>
    )
}

export default HackathonCard