import axios from "axios"

const  HUBSPOTAPI  = import.meta.env.VITE_HUBSPOT

/////  user
export const userSignup = async (userData, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/users/register`, userData)
        handleResponse({res})
        console.log(res);
        handleloading(false)
    }
    catch (err) {
        handleloading(false)
        handleResponse({err})
        console.log(err);
    }
}