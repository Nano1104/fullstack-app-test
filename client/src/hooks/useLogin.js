import axios from "axios";
import { useAuthContext } from "../context/AuthContext.jsx";

const useLogin = () => {
    const { setAuthUser }  = useAuthContext();

    const singIn = async ({ username, password }) => {
        try {
            const res = await axios.post("/api/login", { username, password });
            const data = res.data; 

            sessionStorage.setItem("user", JSON.stringify(data.userFound));
            setAuthUser(() => {
                if (data.userFound && data.userFound.role === "admin") {
                    return data.userFound;
                } else {
                    return null;
                }
            })
            
        } catch (err) {
            alert("Error login user in front")
        }
    }

    return { singIn }
}

export default useLogin