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


// booking 
export const initializeBooking = async (
    spaceId,
    bookingData,
    handleloading,
    handleResponse,
    spaceToken
  ) => {
    console.log(spaceToken);
    try {
      handleloading(true);
      let endpoint = "";
      const requestData = { ...bookingData };
  
      if (bookingData.durationType === "hourly") {
        endpoint = `${HUBSPOTAPI}/booking/initialize/${spaceId}`;
        requestData.durationPerHour = bookingData.duration;
        delete requestData.duration;
        delete requestData.durationType;
      } else if (bookingData.durationType === "daily") {
        endpoint = `${HUBSPOTAPI}/booking/day/initialize/${spaceId}`;
        requestData.durationPerDay = bookingData.duration;
        delete requestData.duration;
        delete requestData.durationType;
      }
  
      const res = await axios.post(endpoint, requestData, {
        headers: {
          Authorization: `Bearer ${spaceToken}`,
        },
      });
      handleloading(false);
      handleResponse({ res });
      console.log(res);
    } catch (err) {
      handleloading(false);
      handleResponse({ err });
      console.log(err);
    }
  };
  
  export const verifyBooking = async (
    reference,
    handleloading,
    handleResponse
  ) => {
    try {
      handleloading(true);
      const res = await axios.get(
        `${HUBSPOTAPI}/booking/verify?reference=${reference}`
      );
      handleloading(false);
      handleResponse({ res });
      console.log(res);
    } catch (err) {
      handleloading(false);
      handleResponse({ err });
      console.log(err);
    }
  };
  
  export const verifyDayBooking = async (
    reference,
    handleloading,
    handleResponse
  ) => {
    try {
      handleloading(true);
      const res = await axios.get(
        `${HUBSPOTAPI}/booking/day/verify?reference=${reference}`
      );
      handleloading(false);
      handleResponse({ res });
      console.log(res);
    } catch (err) {
      handleloading(false);
      handleResponse({ err });
      console.log(err);
    }
  };