import React, { useEffect, useState } from 'react';
import "./header.css";
import { IoIosSearch } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";
import { PiListLight } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.hubspot.userToken);
  const [token, setToken] = useState(false);
  const [show, setShow] = useState(null);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    setToken(!!userToken); 
  }, [userToken]);

  const handleShowNav = () => {
    setDropDown(!dropDown);
  };

  const showing = (key) => {
    setShow((currentdiv) => (currentdiv === key ? null : key));
  };

  return (
    <div className='Headerbody'>
      <main className='Headermain'>
        <div className='Headerdiv1'>
          <img src='/Frame 2382 (5).png' className='Headerdiv1img' onClick={() => navigate("/")}/>
        </div>
        <div className='Headerdiv2'>
          <input type="text" placeholder='Search' className='Headerdiv2input' />
          <IoIosSearch className='Headerdiv2icon' />
        </div>
        <div className='Headerdiv3'>
          <p className='Headerdiv3XX' onClick={() => navigate("/")}>Home</p>
          <p className='Headerdiv3X' onClick={() => navigate("/becomeahost")}>Become a Host</p>
          <p className='Headerdiv3X' onClick={() => navigate("/aboutus")}>About Us</p>

          {token ? (
            <span className='Headerdiv3span'>
              <HiMiniUserCircle className='Headerdiv3spanicon' />
            </span>
          ) : (
            <span className='Headerdiv3spanX'>
              <button className='Headerdiv3spanXbut1' onClick={() => showing("signup")}>Sign Up</button>
              {show === "signup" && (
                <div className='Headerdiv1XXdropdownspanbutdrop'>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/hostsignup")}>Sign up as a host</p>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/usersignup")}>Sign up as a user</p>
                </div>
              )}
              <button className='Headerdiv3spanXbut2' onClick={() => showing("login")}>Login</button>
              {show === "login" && (
                <div className='Headerdiv1XXdropdownspanbutdrop1'>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/hostlogin")}>Login as a host</p>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/login")}>Login as a user</p>
                </div>
              )}
            </span>
          )}
        </div>
      </main>

      <div className='Headerdiv1XX'>
        <main className='Headerdiv1XXmain'>
          <img src='/hubspot logo.jpg' className='Headerdiv1XXmainimg' />
          <div onClick={handleShowNav}>
            {dropDown ? <MdOutlineClear /> : <PiListLight />}
          </div>
        </main>

        {dropDown && (
          <div className='Headerdiv1XXdropdown'>
               <div className='Headerdiv1XXdropdownspan'>
              <span className='Headerdiv1XXdropdownspanshow'>
              <button className='Headerdiv1XXdropdownspanbut' onClick={() => showing("signup")}>Sign up</button>
              {show === "signup" && (
                <div className='Headerdiv1XXdropdownspanbutdropis'>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/hostsignup")}>Sign up as a host</p>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/usersignup")}>Sign up as a user</p>
                </div>
              )}
              </span>
              <span className='Headerdiv1XXdropdownspanshow'>
              <button className='Headerdiv1XXdropdownspanbut' onClick={() => showing("login")}>Login</button>
              {show === "login" && (
                <div className='Headerdiv1XXdropdownspanbutdropis'>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/hostlogin")}>Login as a host</p>
                  <p className='Headerdiv1XXdropdownspanbutdroptag' onClick={() => navigate("/login")}>Login as a user</p>
                </div>
              )}
              </span>
            </div>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/hostpage")}>Become a host</p>
            <p onClick={() => navigate("/aboutus")}>About Us</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
