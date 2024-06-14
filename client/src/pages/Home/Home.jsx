import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <h1 className="text-center text-4xl font-bold text-white">Hello World</h1>
        <div className="flex justify-center">
            <Link to="/login" className="text-white py-1 px-3 bg-slate-700 rounded-md m-4">Login</Link>
            <Link to="/register" className="text-white py-1 px-3 bg-slate-700 rounded-md m-4">Register</Link>
            <Link to="/changePrice" className="text-white py-1 px-3 bg-slate-700 rounded-md m-4">Change Price</Link>
        </div>
        </>
    )
}

export default Home