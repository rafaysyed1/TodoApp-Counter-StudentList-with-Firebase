import useSignup from "../customHooks/useSignup"

export default function SignUp(){
    const{
        userName,
        email,
        password,
        loader,
        setUserName,
        setEmail,
        setPassword,
        setLoader,
        onSubmitDataHandler

    }=useSignup()
    return (
        <div>
            <h1>SignUp Form</h1>
            <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Enter your username" />
            <br />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
            <br />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" />
            <br />
            {loader ?<button>It's Loading</button>:
            <button onClick={onSubmitDataHandler} type="submit">Signup</button>}
        </div>
    )
}