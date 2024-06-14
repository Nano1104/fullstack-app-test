import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
    const { singIn } = useLogin();
    const [inputs, setInputs] = useState({ username: "", password: "" })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await singIn(inputs);
    }

    return(
        <>
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-white">Login Page</h1>

            <form action="" className="flex gap-5" onSubmit={handleSubmit}>
                <input type="text" className="border border-slate-800 rounded-md py-1 px-2 my-4" placeholder="Write your username" required
                onChange={(e) => { setInputs({ ...inputs, username: e.target.value }) }} />

                <input type="password" className="border border-slate-800 rounded-md py-1 px-2 my-4" placeholder="Write your password" required
                onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }} />

                <button type="submit" className="py-1 px-3 bg-slate-700 text-white rounded-lg my-4">SEND</button>
            </form>
        </div>
        <Link to="/" className="py-1 px-3 bg-slate-700 rounded-md m-4 text-white">VOLVER</Link>
        </>
    )
}

export default Login