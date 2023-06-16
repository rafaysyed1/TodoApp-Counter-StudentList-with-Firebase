import { useState } from "react"
import {auth,createUserWithEmailAndPassword} from "../config/firebasedb" 
import { toast } from "react-toastify";
import { useRouter  } from "next/router";

export default function useSignup(){
    const [userName,setUserName] = useState<string>('')
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')
    const [loader,setLoader]=useState(false)
    const router = useRouter();
    const onSubmitDataHandler =async()=>{
        try {
            setLoader(true)
            await createUserWithEmailAndPassword(auth, email, password)
            toast.success('Successfully singup!');
            router.push('/login')
            
        } catch (e) {
            toast.error(e.message);
            console.log("-------------------------------------------");
            console.log(e);
            console.log("-------------------------------------------");   
        }finally{
            setLoader(false)

        }
    }
    return {
        userName,
        email,
        password,
        loader,
        setUserName,
        setEmail,
        setPassword,
        setLoader,
        onSubmitDataHandler


    }
}