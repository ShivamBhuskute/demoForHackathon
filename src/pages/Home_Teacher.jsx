import React from 'react'
import Header from "../components/HomePage/Header.jsx";
import Banner from "../components/HomePage/Banner.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import TeacherContent from "../components/HomePage/TeacherContent1.jsx";

function Home_Teacher() {
    return (
        <div>
          <Header />
          <Banner />  
          <TeacherContent />     
          <Footer />
        </div>
      );
    }

export default Home_Teacher
