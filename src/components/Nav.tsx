import { Badge, Button, Tooltip, User } from "@heroui/react"
import { PiListLight } from "react-icons/pi"
import { TappDispatch, TappInitialState } from "../lib/types"
import { useDispatch, useSelector } from "react-redux"
import { setDesktopNotification, setNavOpen } from "../redux/slices/appSLice"
import { motion, scale } from 'framer-motion'
import { useEffect, useState } from "react"
import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { Link } from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";
import { RiNotificationFill } from "react-icons/ri";

const Nav = () => {
    const dispatch = useDispatch<TappDispatch>()
    const { navOpen, disktopNotifications } = useSelector((state: { app: TappInitialState }) => state.app)
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
    };

    return (
        <div>

            {/* mobile */}
            <div className="md:hidden text-black">
                <Button isIconOnly variant="light" onPress={() => { dispatch(setNavOpen(!navOpen)) }} radius="lg">
                    {
                        navOpen ? <IoCloseOutline className="text-3xl text-white" /> : <PiListLight className="text-3xl text-white" />
                    }
                </Button>
                {<motion.div initial={{ height: 0 }} animate={{ height: navOpen ? minNavHeight : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className='absolute top-[74px] left-0 w-screen overflow-hidden overflow-y-auto  bg-transparent backdrop-blur-xl'>
                    <div className="flex flex-col w-full relative">
                        <div className="sticky p-3 pt-[15px] pl-[15px] top-0 bg-success-100/40 z-[998]">
                            <Link to={"/profile/12"} onClick={() => { dispatch(setNavOpen(false)) }}>
                                <User
                                    classNames={{ name: 'text-xl font-semibold' }}
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d", isBordered: true, size: 'lg',
                                    }}
                                    description="Product Designer"
                                    name={"Abdellah ait bachikh"}
                                /></Link>
                        </div>
                        <div className="p-2 z-[997]">
                            <Accordion selectionMode="multiple" motionProps={{
                                variants: {
                                    enter: {
                                        y: 0,
                                        opacity: 1,
                                        height: "auto",
                                        overflowY: "unset",
                                        transition: {
                                            height: {
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                                duration: 1,
                                            },
                                            opacity: {
                                                easings: "ease",
                                                duration: 1,
                                            },
                                        },
                                    },
                                    exit: {
                                        y: -10,
                                        opacity: 0,
                                        height: 0,
                                        overflowY: "hidden",
                                        transition: {
                                            height: {
                                                easings: "ease",
                                                duration: 0.25,
                                            },
                                            opacity: {
                                                easings: "ease",
                                                duration: 0.3,
                                            },
                                        },
                                    },
                                },
                            }}>
                                <AccordionItem

                                    key="1"
                                    aria-label="Chung Miller"
                                    startContent={<Link to={'/conversations/show/9'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setNavOpen(false))
                                    }}>
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                        /></Link>
                                    }

                                    subtitle="4 unread messages"
                                    title={<Link to={'/conversations/show/9'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setNavOpen(false))
                                    }}>abdellah ait bachikh</Link>}
                                >
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem
                                    key="2"
                                    aria-label="Janelle Lenard"
                                    startContent={<Link to={'/conversations/show/10'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setNavOpen(false))
                                    }}>
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                        /></Link>
                                    }
                                    subtitle="3 incompleted steps"
                                    title={<Link to={'/conversations/show/10'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setNavOpen(false))
                                    }}>Janelle Lenard</Link>}
                                    classNames={{ content: 'flex flex-col gap-2' }}
                                >
                                    <p>1\ {defaultContent}</p>

                                    <p>2\ ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

                                </AccordionItem>
                                <AccordionItem
                                    key="3"
                                    aria-label="Zoey Lang"
                                    startContent={<Link to={'/conversations/show/11'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setNavOpen(false))
                                    }}>
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        /></Link>
                                    }
                                    subtitle={
                                        <p className="flex">
                                            2 issues to<span className="text-primary ml-1">fix now</span>
                                        </p>
                                    }
                                    title={<Link to={'/conversations/show/11'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setNavOpen(false))
                                    }}>Zoey Lang</Link>}
                                >
                                    {defaultContent}
                                </AccordionItem>

                            </Accordion>
                        </div>
                    </div>
                </motion.div>}
            </div>

            {/* desktop */}
            <div className="hidden md:block ">
                <div className="flex items-center gap-6">
                    <div className="relative"> <Badge content={'2'} color="danger"><Button variant="light" isIconOnly radius="lg" className="text-3xl text-white" onPress={() => { dispatch(setDesktopNotification(!disktopNotifications)) }}><RiNotificationFill /></Button>
                    </Badge>  <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: disktopNotifications ? 1 : 0.5, opacity: disktopNotifications ? 1 : 0 }} className="absolute top-full right-0 w-[350px] text-black max-h-[550px] overflow-hidden overflow-y-auto">
                            <Accordion
                                selectionMode="multiple"
                                className="p-2 flex flex-col gap-1 w-full overflow-hidden"
                                itemClasses={itemClasses}
                                variant="shadow"
                                motionProps={{
                                    variants: {
                                        enter: {
                                            y: 0,
                                            opacity: 1,
                                            height: "auto",
                                            overflowY: "unset",
                                            transition: {
                                                height: {
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30,
                                                    duration: 1,
                                                },
                                                opacity: {
                                                    easings: "ease",
                                                    duration: 1,
                                                },
                                            },
                                        },
                                        exit: {
                                            y: -10,
                                            opacity: 0,
                                            height: 0,
                                            overflowY: "hidden",
                                            transition: {
                                                height: {
                                                    easings: "ease",
                                                    duration: 0.25,
                                                },
                                                opacity: {
                                                    easings: "ease",
                                                    duration: 0.3,
                                                },
                                            },
                                        },
                                    },
                                }}
                            >

                                <AccordionItem
                                    key="2"
                                    aria-label="Janelle Lenard"
                                    startContent={<Link to={'/conversations/show/10'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setDesktopNotification(false))
                                    }}>
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                        /></Link>
                                    }
                                    subtitle="3 incompleted steps"
                                    title={<Link to={'/conversations/show/10'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setDesktopNotification(false))
                                    }}>Janelle Lenard</Link>}
                                    classNames={{ content: 'flex flex-col gap-2' }}
                                >
                                    <p>1\ {defaultContent}</p>

                                    <p>2\ ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

                                </AccordionItem>
                                <AccordionItem
                                    key="3"
                                    aria-label="Zoey Lang"
                                    startContent={<Link to={'/conversations/show/11'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setDesktopNotification(false))
                                    }}>
                                        <Avatar
                                            isBordered

                                            radius="lg"
                                            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        /></Link>
                                    }
                                    subtitle={
                                        <p className="flex">
                                            2 issues to<span className="text-primary ml-1">fix now</span>
                                        </p>
                                    }
                                    title={<Link to={'/conversations/show/11'} onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(setDesktopNotification(false))
                                    }}>Zoey Lang</Link>}
                                >
                                    {defaultContent}
                                </AccordionItem>

                            </Accordion>
                        </motion.div>
                    </div>
                    <Tooltip content='Abdellah ait bachikh' placement="bottom" showArrow><Link to={"/profile/12"} ><Avatar isBordered /> </Link></Tooltip>
                </div>
            </div>
        </div>
    )
}

export default Nav