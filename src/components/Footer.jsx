// import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white text-center">
      <p className="font-semibold text-6xl mt-3 mb-2 max-[334px]:text-4xl">Keenkeeper</p>
      <p className="opacity-75 text-sm">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <p className="font-medium mb-5 text-xl mt-2">Social Links</p>
      <div className="flex gap-4 justify-center">
        <div className="bg-slate-900 h-10 w-10 rounded-full flex items-center justify-center ">
          <FaYoutube />
        </div>
        <div className="bg-slate-900 h-10 w-10 rounded-full flex items-center justify-center ">
          <FaSquareXTwitter />
        </div>
        <div className="bg-slate-900 h-10 w-10 rounded-full flex items-center justify-center ">
          <FaFacebook />
        </div>
      </div>

      <div className="flex justify-between max-[591px]:flex-col  max-[591px]:gap-4 pb-5 ml-20 mr-20 mt-5 opacity-60" >
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-4 max-[365px]:flex-col">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
        </div>
        </div>
    </div>
  );
};

export default Footer;
