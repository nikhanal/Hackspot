import { MapPin, Calendar, Users ,Search} from "lucide-react"
import { motion } from "framer-motion";
import Button from "../ui/Button"

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };
    
    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.5 }
        }
    };

    return(
        <section className="w-full py-12 md:py-24 lg:py-32 h-screen lg:h-[calc(100vh-5rem)] bg-gradient-to-br from-purple-200 via-blue-100 to-indigo-300 px-4 lg:px-28 flex items-center">
          <motion.div 
            className="container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center align-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-8">
                  <motion.span 
                    variants={itemVariants}
                    className="w-fit bg-purple-100 text-purple-700 hover:bg-purple-200 text-lg px-2 py-1 rounded-full"
                  >
                    🚀 Join 50,000+ developers worldwide
                  </motion.span>
                  <motion.h1 
                    variants={itemVariants}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl text-gray-800"
                  >
                    Discover hackathons in your <span className="text-purple-600">neighborhood</span>
                  </motion.h1>
                  <motion.p 
                    variants={itemVariants}
                    className="max-w-[800px] text-gray-600 md:text-2xl tracking-wide"
                  >
                    Connect with local developers, join exciting hackathons, and build amazing projects together. Find
                    your next coding adventure just around the corner.
                  </motion.p>
                </div>

                {/* Search Bar */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-2 max-w-md"
                >
                  <div className="relative flex-1 h-14">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input placeholder="Enter your city or zip code" className="pl-10 h-14 text-xl w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-3 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50" />
                  </div>
                  <Button size="lg" onClick={() => {}} variant="default" children="Find Events"/>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center gap-4 text-sm text-gray-600"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>200+ cities</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-5 w-5" />
                    <span>500+ events monthly</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5" />
                    <span>50k+ members</span>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="relative w-1/2"
                variants={imageVariants}
              >
                <div className="w-full h-[500px] bg-gradient-to-b from-purple-800 via-purple-400 rounded-2xl blur-3xl opacity-20 shadow-2xl"></div>
                <img
                  src="/Hero.jpg"
                  alt="Developers collaborating at hackathon"
                  className="absolute mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl top-0 bottom-10 left-11"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
    )
}

export default Hero