import { Button, User } from "@heroui/react"
import { PiListLight } from "react-icons/pi"
import { TappDispatch, TappInitialState } from "../lib/types"
import { useDispatch, useSelector } from "react-redux"
import { setNavOpen } from "../redux/slices/appSLice"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import NotificationElement from "./NotificationElement"
import { Accordion, AccordionItem, Avatar } from "@heroui/react";

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
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div>

            {/* mobile */}
            <div className="md:hidden text-black">
                <Button isIconOnly variant="light" onPress={() => { dispatch(setNavOpen(!navOpen)) }}><PiListLight className="text-3xl text-white" /></Button>
                {<motion.div initial={{ height: 0 }} animate={{ height: navOpen ? minNavHeight : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className='absolute top-[74px] left-0 w-screen overflow-hidden overflow-y-auto  bg-transparent backdrop-blur-xl'>
                    <div className="flex flex-col w-full relative">
                        <div className="sticky p-3 pt-[15px] pl-[15px] top-0 bg-success-100 z-[998]">
                            <User
                                classNames={{ name: 'text-xl font-semibold' }}
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d", isBordered: true, size: 'lg',
                                }}
                                description="Product Designer"
                                name="Abdellah ait bachikh"
                            />
                        </div>
                        <div className="p-2 z-[997]">
                            <Accordion selectionMode="multiple">
                                <AccordionItem
                                    key="1"
                                    aria-label="Chung Miller"
                                    startContent={
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                        />
                                    }
                                    subtitle="4 unread messages"
                                    title="Chung Miller"
                                >
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem
                                    key="2"
                                    aria-label="Janelle Lenard"
                                    startContent={
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                        />
                                    }
                                    subtitle="3 incompleted steps"
                                    title="Janelle Lenard"
                                >
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem
                                    key="3"
                                    aria-label="Zoey Lang"
                                    startContent={
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        />
                                    }
                                    subtitle={
                                        <p className="flex">
                                            2 issues to<span className="text-primary ml-1">fix now</span>
                                        </p>
                                    }
                                    title="Zoey Lang"
                                >
                                    {defaultContent}
                                </AccordionItem>
                               
                            </Accordion>
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