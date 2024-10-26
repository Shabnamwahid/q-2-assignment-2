import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-12 justify-center m-10 mb-0 bg-slate-400">
      <nav className="flex justify-center gap-10 text-slate-200 font-medium bg-gradient-to-r from-black to-gray-700">
        <a href="#" className="hover:text-cyan-500">Home</a>
        <a href="#" className="hover:text-cyan-500">About</a>
        <a href="#" className="hover:text-cyan-500">Contact</a>
        <a href="#" className="hover:text-cyan-500">Order</a>
      </nav>
      <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="nofollow noopener">
          <Image src="https://img.icons8.com/?size=48&id=118497&format=png" alt="facebook logo" width={48} height={48} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="nofollow noopener">
          <Image src="https://img.icons8.com/?size=48&id=32323&format=png" alt="instagram logo" width={48} height={48} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
          <Image src="https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png" alt="twitter logo" width={48} height={48} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">
          <Image src="https://img.icons8.com/?size=48&id=13930&format=png" alt="linkedin logo" width={48} height={48} />
        </a>
      </div>
      <p className="text-center text-black mb-8 font-extrabold bg-slate-600">
        Shabnam Wahid 2024 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
