import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

export default function AddUser({addUser, setAddUser, handleAdd} : any) {
    
    const [appear, setAppear] = useState(false);

    const handleAppear = () => {
        setAppear(!appear);
    }

    return(
        <div className="">
            <form onSubmit={handleAdd} className="flex items-center justify-center mt-4 mb-2">
                <IoAddOutline onClick={handleAppear} className={`${appear? 'rotate-45' : 'rotate-0'} p-[2px] border text-emerald-500 bg-zinc-900 border-zinc-500 rounded-full cursor-pointer transition-all transform`} size={35}/>
                <label className="absolute left-[-99999px]" htmlFor="add">Add a user:</label>
                <input
                    className={`${appear? 'w-auto px-4 py-2 mx-2 border' : 'w-0'} bg-zinc-800 text-sm text-zinc-400 focus:outline-none rounded-3xl border-zinc-800 transition-all`}
                    id="user"
                    type="text"
                    value={addUser}
                    onChange={(e) => setAddUser(e.target.value)}
                    placeholder="Enter user's email to add"
                />
            </form>
        </div>
    )
}