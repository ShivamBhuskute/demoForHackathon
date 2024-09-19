import React from 'react'
import Header from "../components/HomePage/Header.jsx";
import Banner from "../components/HomePage/Banner.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import ParentContent1 from "../components/HomePage/ParentContent1.jsx";

function Home_Parents() {
    return (
        <div>
          <Header />
          <Banner />     
          <ParentContent1 />  
          <Footer />
        </div>
      );
    }

export default Home_Parents
