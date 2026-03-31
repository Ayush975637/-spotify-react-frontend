import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

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
          <div className="d-flex align-items-center gap-4" style={{ marginLeft: '5px' }}>

            <a href="/" className="d-flex align-items-center text-white text-decoration-none fs-3 gap-2" style={{ fontFamily: 'Circular, sans-serif' }}>
    <span><FaMusic></FaMusic></span>
  <span>Sangeet</span>
             
            </a>
            
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
                placeholder="What do you want to play"
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
              
             
             
              
            </ul>

            
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
