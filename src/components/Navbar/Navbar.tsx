import { Code } from "lucide-react"
import {Link} from "react-router-dom"
import Button from "../ui/Button"
const Navbar = () => {
    return(
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 px-4 lg:px-28 h-20 lg:h-24 flex items-center border-b border-gray-200">
            <Link to={"/"} className="flex items-center gap-2">
                <Code className="h-10 w-10 text-purple-600"/>
                <span className="text-4xl font-bold text-gray-800 ml-2">HackSpot</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 lg:gap-8">
          <Link to="#" className="text-xl text-gray-800 font-medium hover:text-purple-600 transition-colors">
            Communities
          </Link>
          <Link to="#" className="text-xl text-gray-800 font-medium hover:text-purple-600 transition-colors">
            Host Event
          </Link>
          <Link to="#" className="text-xl text-gray-800 font-medium hover:text-purple-600 transition-colors">
            About
          </Link>
        </nav>
        <div className="ml-6 flex gap-2 lg:gap-4">
          <Button variant="outline" onClick={() => {}} size="md">
            Log in
          </Button>
          <Button variant="default" onClick={() => {}} size="md">
            Sign up
          </Button>
        </div>
        </header>
    )
}

export default Navbar