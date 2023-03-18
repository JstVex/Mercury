import { useContext } from "react"
import {UserContext} from "@/context/UserContext"
import Image from "next/image"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"

export default function Profile({setToggle, handleToggle} : any) {
    const authUser = useContext(UserContext)

    const signout = () => {
        signOut(auth)
            .then(() => {
                console.log('the user signed out');
                handleToggle();
            })
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-zinc-900/90 flex items-center justify-center">
            <div className="bg-zinc-800 w-auto h-auto border-2 border-zinc-700 rounded-lg">
                <span onClick={handleToggle} className="text-zinc-400 float-right text-2xl mr-3" >x</span>
                <div className="flex text-zinc-100 items-center my-6 px-6">
                    <Image className="rounded-full mr-6" src={authUser?.photoURL} width={80} height={80} alt='profile'/>
                    <div>
                        <div className="text-2xl">
                            {authUser?.displayName}
                        </div>
                        <div className="text-zinc-400">
                            {authUser?.email}
                        </div>
                    </div>
                </div>
                <div  className="text-zinc-100 text-lg text-center py-4 border-y border-zinc-600 hover:bg-zinc-700">
                    Theme
                </div>
                <div onClick={signout} className="text-zinc-100 text-lg text-center py-4 border-y border-zinc-600 hover:bg-zinc-700">
                    Logout
                </div>
               
            </div>
        </div>
    )
}