import axios from "axios";

const apiUrl = import.meta.env.VITE_PROD_SERVER_URL;

const useSignup = () => {

    const signUp = async ({ username, email, password }) => {
        try {
            const res = await axios.post(`${apiUrl}/api/register`, { username, email, password }, { withCredentials: true });
            const data = res.data; 

            console.log(data);
        } catch (err) {
            alert("Error register user in front")
        }
    }

    return { signUp }
}

export default useSignup