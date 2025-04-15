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


export const verifyEmail = async (token, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.get(`${HUBSPOTAPI}/users/verify/${token}`)
        handleResponse({res})
        handleloading(false)
        console.log(res);
    }
    catch (err){
        handleloading(false)
        handleResponse({err})
        console.log(err)
    }
}


export const userLogin = async (userInfo,  handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/users/login`, userInfo)
        handleloading(false)
        handleResponse({res})
        console.log(res);
    }
    catch (err){
        handleloading(false)
        handleResponse({err})
        console.log(err)
    }
}




/// host

export const hostSignup = async (userData, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/host/register`, userData)
        handleResponse({res})
        handleloading(false)
    }
    catch (err) {
        handleloading(false)
        handleResponse({err})
    }
}


export const hostLogin = async (userInfo,  handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/host/login`, userInfo)
        handleloading(false)
        handleResponse({res})
        console.log(res);
    }
    catch (err){
        handleloading(false)
        handleResponse({err})
        console.log(err)
    }
}