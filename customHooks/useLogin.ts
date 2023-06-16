import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../config/firebasedb"
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { async } from "@firebase/util";


export default function useLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const onSubmitDataHandler = async () => {
        try {
            setLoader(true)
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("You have logged in successfully")
            router.push('/')
        } catch (e) {
            console.log("-----------------------------------------------");
            toast.error(e.message)
            console.log("-----------------------------------------------");
            
            
            
        }
        finally{
            setLoader(false);
        }

    }
    return{
        email,
        setEmail,
        password,
        setPassword,
        loader,
        setLoader,
        onSubmitDataHandler
    
    }
}