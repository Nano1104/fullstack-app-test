import axios from "axios";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
    const { setAuthUser }  = useAuthContext();

    const signUp = async ({ username, email, password }) => {
        try {
            const res = await axios.post("/api/register", { username, email, password });
            const data = res.data; 

            console.log(data);
        } catch (err) {
            alert("Error register user in front")
        }
    }

    return { signUp }
}

export default useSignup