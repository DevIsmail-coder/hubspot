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


export const verifiyEmail = async (token, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.get(`${HUBSPOTAPI}/users/verify/${token}`)
        handleResponse({res})
        handleloading(false)
        console.log(res);
    }
    catch (err){
        handleloading(false)
        handleResponse(res)
        console.log({err})
    }
}
