import axios from "axios"
import { FaListCheck } from "react-icons/fa6"

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



//  space
export const getAllspace = async (handleResponse) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/space/getAll`)
        handleResponse(res)
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}

export const getDetails = async (handleResponse, id) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/space/getOne/${id}`)
        handleResponse(res)
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}

export const createSpace = async (formData, spaceToken, handleResponse, handleloading) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/space/create`, formData, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        handleloading(false)
        handleResponse({res});
        console.log(res);
        
    }
    catch (err){
        handleloading(false)
        handleResponse({err})
        console.log(err);
        
    }
}

export const topSpace = async (handleResponse) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/space/toprated`)
        handleResponse(res)
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}




// host dashboard
export const getSpace = async (handleResponse, spaceToken) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/host/getspaces`, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        handleResponse(res)
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}

export const listing = async (handleResponselist, spaceToken) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/host/listings`, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        handleResponselist(res)
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}

export const bookCategories = async (showPerformance, spaceToken) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/host/bookingcategories`, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        showPerformance(res)
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}

export const spaceBooking = async (handleResponse, spaceToken) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/host/spacebookings`, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        handleResponse({res})
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}

export const currentBalance = async (showbalance, spaceToken) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/host/currentbalance`, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        showbalance(res)
        console.log(res);
    }
    catch (err){
        console.log(err)
    }
}