import { useState } from "react";
import useSignup from "../../hooks/useSingup.js";

const Register = () => {
    const { signUp } = useSignup();
    const [inputs, setInputs] = useState({ username: "", email: "", password: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(inputs)
    }

    return(
        <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-rose-900 text-3xl">Register Page</h1>
            
            <form action="" className="flex gap-5" onSubmit={handleSubmit}>
                <input type="text" className="border border-slate-800 rounded-md py-1 px-2" placeholder="Write your name" required
                onChange={(e) => { setInputs({ ...inputs, username: e.target.value }) }} />

                <input type="email" className="border border-slate-800 rounded-md py-1 px-2" placeholder="Write your email" required
                onChange={(e) => { setInputs({ ...inputs, email: e.target.value }) }} />

                <input type="password" className="border border-slate-800 rounded-md py-1 px-2" placeholder="Write your password" required
                onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }} />

                <button type="submit" className="py-1 px-3 bg-slate-700 text-white rounded-lg">SEND</button>
            </form>
        </div>
        </>
    )
}

export default Register