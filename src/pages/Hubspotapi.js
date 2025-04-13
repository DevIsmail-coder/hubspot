import axios from "axios"

const  HUBSPOTAPI  = import.meta.env.VITE_HUBSPOT

/////  user
export const userSignup = async (userData, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/users/register`, userData)
        handleResponse({res})
        handleloading(false)
    }
    catch (err) {
        handleloading(false)
        handleResponse({err})
    }
}


export const verifiyEmail = async () => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/users/register`, userData)
        console.log(res);
        
        // handleResponse({res})
        // handleloading(false)
    }
    catch (err) {
        console.log(res);
        
        // handleloading(false)
        // handleResponse({err})
    }
}
