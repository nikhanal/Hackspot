import { Code } from "lucide-react";
import {Link} from "react-router-dom"

const Footer = () => {
    return(
        <footer className="flex flex-col gap-2 lg:px-8 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50 border-gray-200   ">
            <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-purple-600" />
            <span className="text-lg font-medium">HackSpot</span>
            </div>
            <p className="text-sm text-gray-600 sm:ml-4">© 2024 HackSpot. Connecting developers worldwide.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link to="#" className="text-sm hover:underline underline-offset-4 text-gray-600">
                Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:underline underline-offset-4 text-gray-600">
                Terms of Service
            </Link>
            <Link to="#" className="text-sm hover:underline underline-offset-4 text-gray-600">
                Contact
            </Link>
            </nav>
        </footer>
    )
}

export default Footer
