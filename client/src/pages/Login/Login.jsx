const Login = () => {
    return(
        <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-rose-900 text-3xl">Login Page</h1>
            <form action="" className="flex gap-5">
                <input type="text" className="border border-slate-800 rounded-md py-1 px-2" placeholder="Write your name"/>
                <input type="password" className="border border-slate-800 rounded-md py-1 px-2" placeholder="Write your password"/>
                <button type="submit" className="py-1 px-3 bg-slate-700 text-white rounded-lg">SEND</button>
            </form>
        </div>
        </>
    )
}

export default Login