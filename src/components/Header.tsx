import { BiChat } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PiListLight } from "react-icons/pi";
import { Button } from "@heroui/react";

const Header = () => {
    return (
        <header className="w-full bg-white flex justify-center">
            <div className="w-full md:w-[700px] lg:w-[900px] flex items-center justify-between p-4">
                <Link to={'/'} className="flex items-center gap-2">
                    <BiChat className="text-3xl md:text-4xl" /> <span className="text-xl md:text-3xl font-bold">Chat_you</span>
                </Link>
                <div>
                    <Button isIconOnly variant="light" ><PiListLight className="text-3xl" /></Button>
                </div>
            </div>
        </header>
    )
}

export default Header