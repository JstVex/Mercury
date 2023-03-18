import {BsSend, BsArchive} from "react-icons/bs"
import {MdNotificationsNone, MdOutlineSettings} from "react-icons/md"
import {HiOutlineUserGroup} from "react-icons/hi"
import {CgProfile} from "react-icons/cg"
import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import Image from "next/image";
import Profile from "@/components/profile"

export default function Sidebar() {
    const authUser = useContext(UserContext)
    console.log(authUser)

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    
    
    return (
        <>
            <div className="flex items-center justify-between flex-col h-screen w-[72px] bg-zinc-900 text-white border-r border-zinc-600">
                <div>
                    {authUser? <Image onClick={handleToggle} className="rounded-3xl mt-4 cursor-pointer" src={authUser?.photoURL} width={50} height={50} alt='profile'/> : <CgProfile className="mt-4" size='40'/>}
                    
                </div>
                <div className="flex flex-col justify-evenly bg-zinc-800 h-80 border border-zinc-700 rounded-3xl p-2 ">
                    <Link href='/'>
                        <SideBarIcon icon={<BsSend size='22'/>} />
                    </Link>
                    <Link href='/group'>
                        <SideBarIcon icon={<HiOutlineUserGroup size='24'/>} />
                    </Link>
                    <Link href='/archive'>
                        <SideBarIcon icon={<BsArchive size='22'/>} />
                    </Link>
                    <Link href='/notification'>
                        <SideBarIcon icon={<MdNotificationsNone size='24'/>} />
                    </Link>
                </div>
                <div>
                    <MdOutlineSettings className="mb-4" size='26'/>
                </div>
            </div>
            {toggle && <Profile setToggle={setToggle} handleToggle={handleToggle} /> }
            
        </>
    )
};

type iconProps = {
    icon: React.ReactNode;
}

const SideBarIcon = ({icon} : iconProps) => {
    return (
        <div className="sidebar-icon">
            {icon}
        </div>
    )
}