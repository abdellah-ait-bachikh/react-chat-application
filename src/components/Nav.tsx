import { Button } from "@heroui/react"
import { PiListLight } from "react-icons/pi"
import { TappDispatch, TappInitialState } from "../lib/types"
import { useDispatch, useSelector } from "react-redux"
import { setNavOpen } from "../redux/slices/appSLice"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
const Nav = () => {
    const dispatch = useDispatch<TappDispatch>()
    const { navOpen } = useSelector((state: { app: TappInitialState }) => state.app)
    const [minNavHeight, setNavMinHeight] = useState(500)
    useEffect(() => {
        const updateNavHeight = () => {
            setNavMinHeight(window.innerHeight - 74)
        }
        updateNavHeight()
        window.addEventListener('resize', updateNavHeight)
        return () => {
            window.removeEventListener('resize', updateNavHeight)
        }
    }, [])
    return (
        <div>

            {/* mobile */}
            <div className="md:hidden">
                <Button isIconOnly variant="light" onPress={() => { dispatch(setNavOpen(!navOpen)) }}><PiListLight className="text-3xl" /></Button>
                {<motion.div initial={{ height: 0 }} animate={{ height: navOpen ? minNavHeight : 0 }} className='absolute top-[74px] left-0 w-screen overflow-hidden overflow-y-auto  bg-slate-400'><div>mobile nave  </div>  </motion.div>}
            </div>

            {/* desktop */}
            <div className="hidden md:block">
                desktop bnnav
            </div>
        </div>
    )
}

export default Nav