import React from 'react'
import './forgotpassword.css'
import { MdEmail } from "react-icons/md";

const Forgetpassordpassword = () => {
  return (
 <div className='Forgetpasswordbody'>
             <main className='Forgetpasswordmain'>
                 <div className='Forgetpasswordcontainer1'>
                     <h1>Forget Password </h1>
                     <p className='Forgetpasswordcontainer1p'>Create your account and unlock the perfect space for your needs.</p>
                 </div>
                 <div className='Forgwtpasswordcontainer2'>
                  <span className='Forgetpasswordcontainer2span' >
                        <MdEmail />
                        <input type="text"
                       placeholder='Email address'
                       className='Forgetpaswordcontainerinput'
                      />
                     </span>
                    
                 </div>
                 <button className='Forgetpasswordbutton1'>Submit</button>
             </main>
         </div> 
  )
}

export default Forgetpassordpassword
