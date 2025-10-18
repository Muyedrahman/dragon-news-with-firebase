import React from 'react';

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FaSquareXTwitter } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold mb-5">Find Us on</h2>
        <div className="">
          <div className="join join-vertical w-full">
            <button className="btn bg-base-100 justify-start join-item"> <FaFacebook /> Facebook</button>
            <button className="btn bg-base-100 justify-start join-item"> 
            <FaSquareXTwitter /> Twitter</button>
            <button className="btn bg-base-100 justify-start join-item">
             <FaInstagram />   Instagram</button>
          </div>
        </div>
      </div>
    );
};

export default FindUs;