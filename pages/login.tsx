import useLogin from "../customHooks/useLogin"


export default function Login() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        loader,
        setLoader,
        onSubmitDataHandler

    } = useLogin()
    return (
        <div>
            <h1>
                Login Form
            </h1>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <br />
            {loader ? <button>Loading</button> :
            <button onClick={onSubmitDataHandler}>Login</button>}
            
        </div>
    )
}