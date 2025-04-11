import axios from "axios"

const  HUBSPOTAPI  = import.meta.env.VITE_HUBSPOT

console.log(HUBSPOTAPI);

/////  user
export const userSignup = async (userData) => {
    try {
        const res = await axios.post(`${HUBSPOTAPI}/users/register`, userData)
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}