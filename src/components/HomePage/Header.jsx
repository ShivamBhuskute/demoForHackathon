import React, { useState } from 'react';

const Header = () => {

  
  // State to store the selected language
  const [language, setLanguage] = useState('EN');

  // Function to handle language change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // Add logic to update the language of your website based on the selected language
    console.log('Selected language:', event.target.value);
  };

  return (
    <header className="bg-blue-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-bold text-4xl flex items-center">
          {/* <img src="/logo.svg" alt="Extra Marks Logo" className="h-8 w-8 mr-2" /> */}
          WISETRACK
        </div>

        {/* Nav Links */}
        <nav className="space-x-12 ml-80 text-white text-lg mx-auto flex justify-between items-center">
          <a href="" className="hover:underline ">STUDENT</a>
          <a href="#teacher" className="hover:underline">TEACHER</a>
          <a href="#parents" className="hover:underline">PARENTS</a>
          <a href="#university" className="hover:underline">UNIVERSITY</a>
        </nav>

        {/* Language Switcher */}
        <div className="text-white mx-6">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-blue-500 border border-white text-white rounded px-2 py-1"
          >
            <option className="bg-blue-50 text-black" value="EN">English</option>
            <option className="bg-blue-50 text-black" value="MR">Marathi</option>
            <option className="bg-blue-50 text-black" value="HI">Hindi</option>
          </select>
        </div>

        {/* Login/Signup Section */}
        <div className="space-x-4">
          <button className="text-white border border-white ml-20 px-4 py-2 rounded hover:bg-white hover:text-blue-500">
            Login
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500">
            Signup
          </button>
        </div>
      </div>
      
    </header>


    
  );
};

export default Header;
