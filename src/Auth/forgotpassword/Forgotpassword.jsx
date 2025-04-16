import React from 'react'
import './forgotpassword.css'
import { MdEmail } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";

const Forgetpassordpassword = () => {
  return (
 <div className='Forgetpasswordbody'>
     <div className='ForgetBackbutton'>
        <BsArrowLeftCircle  className='ForgetIconButton'  onClick={() => navigate("/login")}/>
         </div>
             <main className='Forgetpasswordmain'>
                 <div className='Forgetpasswordcontainer1'>
                     <h1 className='ForgetHeader'>Forget Password </h1>
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
