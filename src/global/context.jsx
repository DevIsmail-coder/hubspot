import React, { createContext, useContext } from 'react'

const hubspotContext = createContext()

export const useUser = () => {
    return useContext(hubspotContext)
}

const Context = ({children}) => {


    const defaultValue = {

    }
  return <hubspotContext.Provider value={defaultValue}>{children}</hubspotContext.Provider>
  
}

export default Context
