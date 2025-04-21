import axios from "axios"

const HUBSPOTAPI = import.meta.env.VITE_HUBSPOT

/////  user
export const userSignup = async (userData, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/users/register`, userData)
        handleResponse({ res })

        handleloading(false)
    }
    catch (err) {
        handleloading(false)
        handleResponse({ err })
    }
}


export const verifyEmail = async (token, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.get(`${HUBSPOTAPI}/users/verify/${token}`)
        handleResponse({ res })
        handleloading(false)
        console.log(res);
    }
    catch (err) {
        handleloading(false)
        handleResponse({ err })
        console.log(err)
    }
}


export const userLogin = async (userInfo, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/users/login`, userInfo)
        handleloading(false)
        handleResponse({ res })
        console.log(res);
    }
    catch (err) {
        handleloading(false)
        handleResponse({ err })
        console.log(err)
    }
}




/// host

export const hostSignup = async (userData, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/host/register`, userData)
        handleResponse({ res })
        handleloading(false)
    }
    catch (err) {
        handleloading(false)
        handleResponse({ err })
    }
}


export const hostLogin = async (userInfo, handleloading, handleResponse) => {
    try {
        handleloading(true)
        const res = await axios.post(`${HUBSPOTAPI}/host/login`, userInfo)
        handleloading(false)
        handleResponse({ res })
        console.log(res);
    }
    catch (err) {
        handleloading(false)
        handleResponse({ err })
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
    catch (err) {
        console.log(err)
    }
}

export const getDetails = async (handleResponse, id) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/space/getOne/${id}`)
        handleResponse(res)
        console.log(res);
    }
    catch (err) {
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
        handleResponse({ res });
        console.log(res);

    }
    catch (err) {
        handleloading(false)
        handleResponse({ err })
        console.log(err);

    }
}

export const topSpace = async (handleResponse) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/space/toprated`)
        handleResponse(res)
        console.log(res);
    }
    catch (err) {
        console.log(err)
    }
}


export const spaceLocation = async (handleResponse, location) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/space/location?location=${location}`)
        handleResponse(res)
        console.log(res);
    }
    catch (err) {
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
    catch (err) {
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
    catch (err) {
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
    catch (err) {
        console.log(err)
    }
}


export const bookingDetails = async (handleResponse, spaceToken, id) => {

    try {
        const res = await axios.get(`${HUBSPOTAPI}/host/bookingdetails/${id}`, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        handleResponse({ res })
        console.log(res);
    }
    catch (err) {
        console.log(err)
    }
}


export const spaceBooking = async (handleResponse, spaceToken) => {
    try {
        const res = await axios.get(`${HUBSPOTAPI}/host/bookingList`, {
            headers: {
                'Authorization': `Bearer ${spaceToken}`
            }
        })
        handleResponse({ res })
        console.log(res);
    }
    catch (err) {
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
    catch (err) {
        console.log(err)
    }
}


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

// Standard Subscription
export const initializeStandardSubscription = async (handleloading, handleResponse, hostToken) => {
    try {
      handleloading(true);
      const res = await axios.post(`${HUBSPOTAPI}/subscription/initialize`, {}, {
        headers: {
          Authorization: `Bearer ${hostToken}`,
        },
      });
      handleloading(false);
      handleResponse({ res });
    } catch (err) {
      handleloading(false);
      handleResponse({ err });
      console.log(err);
    }
  };
  
  export const verifyStandardSubscription = async (reference, handleloading, handleResponse) => {
    try {
      handleloading(true);
      const res = await axios.get(
        `${HUBSPOTAPI}/subscription/verify?reference=${reference}`
      );
      handleloading(false);
      handleResponse({ res });
    } catch (err) {
      handleloading(false);
      handleResponse({ err });
      console.log(err);
    }
  };
  
  // Premium Subscription
  export const initializePremiumSubscription = async (handleloading, handleResponse, hostToken) => {
    try {
      handleloading(true);
      const res = await axios.post(`${HUBSPOTAPI}/subscription/premium/initialize`, {}, {
        headers: {
          Authorization: `Bearer ${hostToken}`,
        },
      });
      handleloading(false);
      handleResponse({ res });
    } catch (err) {
      handleloading(false);
      handleResponse({ err });
      console.log(err);
    }
  };
  
  export const verifyPremiumSubscription = async (reference, handleloading, handleResponse) => {
    try {
      handleloading(true);
      const res = await axios.get(
        `${HUBSPOTAPI}/subscription/premium/verify?reference=${reference}`
      );
      handleloading(false);
      handleResponse({ res });
    } catch (err) {
      handleloading(false);
      handleResponse({ err });
      console.log(err);
    }
  };


// admin

export const getAdmin = async (isAdminToken, handleResponse) => {
    console.log(isAdminToken);

    try {
        const res = await axios.get(`${HUBSPOTAPI}/spaces/unapproved`, {
            headers: {
                'Authorization': `Bearer ${isAdminToken}`,
            },
        })
        handleResponse(res)
        console.log(res);
    }
    catch (err) {
        console.log(err)
    }
}

export const adminApproved = async (id, isAdminToken, handleApprovedRes) => {
    console.log(isAdminToken);

    try {
        const res = await axios.patch(`${HUBSPOTAPI}/space/approve/${id}`, {}, {
            headers: {
                'Authorization': `Bearer ${isAdminToken}`,
            },
        })
        handleApprovedRes(res)
        console.log(res);
    }
    catch (err) {
        console.log(err)
    }
}