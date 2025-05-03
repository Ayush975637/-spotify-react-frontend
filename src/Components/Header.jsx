import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";
import './Header.css';

import { useNavigate } from 'react-router-dom';
const Header = ({query,setQuery}) => {


  
  const navigate = useNavigate();
  return (
    <header className="p-3 bg-black text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          
          {/* Left: Logo & Icons */}
          <div className="d-flex align-items-center gap-3" style={{ marginLeft: '-50px' }}>

            <a href="/" className="d-flex align-items-center text-white text-decoration-none fs-3" style={{ fontFamily: 'Circular, sans-serif' }}>
              <FaSpotify size={32} className="me-2 w-6 h-6 md:w-10 md:h-10" />
              <span className="fw-bold">Spotify</span>
            </a>
            <IoMdHome size={28} title="Home" style={{ cursor: "pointer" }} />
          </div>

          {/* Middle: Search */}
          <form className="col-12 col-md-5 mb-3 mb-md-0 d-flex" role="search">
            <div className="position-relative w-100" style={{ maxWidth: '400px' }}>
              
              {/* Search Icon - Left */}
              <FaSearch
                className="position-absolute"
                style={{
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                  color: '#aaa',
                }}
              />

              {/* Input with padding for icon space */}
              <input
                type="text"
                className="form-control ps-5 pe-5 bg-dark text-white custom-placeholder"
                placeholder="What do you want to play?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  border: 'none',
                  borderRadius: '20px',
                }}
              />
             

              {/* Chrome Icon - Right */}
              <BsBrowserChrome
                className="position-absolute"
                style={{
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  color: '#aaa',
                }}
              />
            </div>
          </form>

          {/* Right: Nav Links and Buttons */}
          <div className="d-flex align-items-center gap-3">
            <ul className="nav me-3">
              <li>  <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/premium')} >Premium</button></li>
              <li>  <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/about')} >About</button></li>
              <li>  <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/support')} >Support</button></li>

              {/* Vertical Divider */}
              <div style={{
                width: '1px',
                height: '30px',
                backgroundColor: 'white',
                margin: '0 15px',
              }} />

             
              <li> <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/install')} >  <span><GrInstallOption size={25} title="Install App" style={{ cursor: "pointer" }} 
               
                /></span> Install App</button></li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/login')} >Login</button>
              <button type="button" className="btn btn-warning Sign" onClick={() => navigate('/signup')}>Sign up</button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
