import React, { useState } from "react"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import GoogleButton from "react-google-button"
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const login = (e : React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setEmail('');
                setPassword('');
                router.push("/"); 
            }).catch ((err) => {
                console.log(err)
            })
    }

    const provider = new GoogleAuthProvider();

    const googleSignUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential : any = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log('token is', token)
                const user = result.user;
                 console.log('user is', user)
                 router.push("/"); 
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log('error code:', errorCode);
                console.log('error message:', errorMessage);
                console.log('error email:', email);
                console.log('error credential:', credential)
            });
    }

    return (
        <div className="bg-zinc-900 w-full text-white flex items-center justify-center">
            <div className="bg-zinc-800 p-4 h-auto border-2 border-zinc-700 rounded-lg">
                <h1 className="text-center text-2xl mb-8">Login</h1>
                <div className="flex items-center justify-center mb-6">
                     <GoogleButton className="" onClick={googleSignUp}/>
                </div>
               <div className="flex basis-full text-lg items-center text-zinc-600 my-2 before:content-[''] before:grow before:bg-zinc-600 before:h-[1px] before:leading-[0px] before:mx-2 after:content-[''] after:grow after:bg-zinc-600 after:h-[1px] after:leading-[0px] after:mx-2" >
                or
               </div>
               {/* <hr className="bg-zinc-600" /> */}
                <form onSubmit={login}>
                    <div className="my-6">
                        <label className="mr-3 text-lg ml-9" htmlFor="email">Email:</label>
                        <input className="bg-zinc-500 py-1 px-3 rounded-2xl focus:outline-none" type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className="mr-3 text-lg" htmlFor="password">Password:</label>
                        <input className="bg-zinc-500 py-1 px-3 rounded-2xl  focus:outline-none" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <button type="submit" className="border border-zinc-600 p-3 rounded-lg">
                            Enter
                        </button>
                    </div>
                    <div className="text-[13px] text-zinc-500 text-center mt-4">
                        Doesn&#39;t have an account? <Link className="underline text-zinc-400" href='/signup'>Sign Up</Link>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}