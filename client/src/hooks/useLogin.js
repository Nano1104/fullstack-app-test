import axios from "axios";
import { useAuthContext } from "../context/AuthContext.jsx";

const apiUrl = import.meta.env.VITE_PROD_SERVER_URL;

const useLogin = () => {
    const { setAuthUser }  = useAuthContext();
   
    const singIn = async ({ username, password }) => {
        try {
            const res = await axios.post(`${apiUrl}/api/login`, { username, password }, { withCredentials: true });
            const data = res.data; 
            console.log("🚀 ~ singIn ~ data:", data)

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