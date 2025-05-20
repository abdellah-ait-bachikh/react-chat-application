import { BiChat } from "react-icons/bi";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="w-full bg-success-300 flex justify-center realtive text-white z-[999]">
            <div className="w-full md:w-[700px] lg:w-[900px] flex items-center justify-between p-4">
                <Link to={'/'} className="flex items-center gap-2">
                    <BiChat className="text-3xl md:text-4xl" /> <span className="text-xl md:text-3xl font-bold">Chat_you</span>
                </Link>
                <Nav />
            </div>
        </header>
    )
}

export default Header