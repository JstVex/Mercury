import React from "react";
import {BsSend, BsArchive} from "react-icons/bs"
import {MdNotificationsNone, MdOutlineSettings} from "react-icons/md"
import {HiOutlineUserGroup} from "react-icons/hi"
import {CgProfile} from "react-icons/cg"
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex items-center justify-between flex-col h-screen w-16 bg-zinc-900 text-white">
            <div>
                <CgProfile className="mt-4" size='30'/>
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