import React, { createContext, useContext, useState } from 'react'

const hubspotContext = createContext()

export const useUser = () => {
    return useContext(hubspotContext)
}

const Context = ({children}) => {
const [showing, setShowing] = useState(false)

const dropDown = () => {
  setShowing(!showing)
}

    const defaultValue = {
      dropDown,
      showing
    }
  return <hubspotContext.Provider value={defaultValue}>{children}</hubspotContext.Provider>
  
}

export default Context
