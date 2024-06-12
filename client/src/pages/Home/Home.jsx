import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1 className="text-center">Hello World</h1>
            <Link to="/login" className="py-1 px-3 bg-slate-700 rounded-md m-4">Login</Link>
            <Link to="/register" className="py-1 px-3 bg-slate-700 rounded-md m-4">Register</Link>
        </>
    )
}

export default Home