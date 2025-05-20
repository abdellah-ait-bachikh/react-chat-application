import { Button, User } from "@heroui/react"
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
                {<motion.div initial={{ height: 0 }} animate={{ height: navOpen ? minNavHeight : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className='absolute top-[74px] left-0 w-screen overflow-hidden overflow-y-auto  bg-transparent backdrop-blur-xl'>
                    <div className="flex flex-col w-full relative">
                        <div className="p-3 sticky top-0 bg-white">
                            <User
                               classNames={{name:'text-xl font-semibold'}}
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d", isBordered: true, size: 'lg'
                                }}
                                description="Product Designer"
                                name="Abdellah ait bachikh"
                            />
                        </div>
                        <div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                        </div>
                    </div>
                </motion.div>}
            </div>

            {/* desktop */}
            <div className="hidden md:block">
                desktop bnnav
            </div>
        </div>
    )
}

export default Nav