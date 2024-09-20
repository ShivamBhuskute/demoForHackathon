import React from 'react'
import Header from "../components/HomePage/Header.jsx";
import Banner from "../components/HomePage/Banner.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import UniversityContent1 from "../components/HomePage/UniveristyContent1.jsx";
import ChatWidget from "../components/ChatWidget";


function Home_University() {
    return (
        <div>
          <Header />
          <Banner />  
          <UniversityContent1 /> 
          <ChatWidget />
          <Footer />
        </div>
      );
    }

export default Home_University
