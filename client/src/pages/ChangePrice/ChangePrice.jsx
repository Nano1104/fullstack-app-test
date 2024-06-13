import axios from "axios";

const ChangePrice = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put("/api/user/changePrice");
        const data = res.data;
        if(!data) return alert("Cannot changed products price");
         
        alert("Products price changed successfully");
        console.log(data)
    }

    return(
        <>
            <div className="flex justify-center">
                <h1 className="text-center my-5 text-2xl">Welcome to Change Price page!</h1>
                <span className="text-center my-5 text-xl">You can change products price only if you're admin</span>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <button className="bg-slate-700 py-1 px-3 rounded-md" type="submit">CHANGE</button>
            </form>
        </>
    )
}

export default ChangePrice