import React from 'react'
import Header from "../components/HomePage/Header.jsx";
import Banner from "../components/HomePage/Banner.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import StudentContent1 from "../components/HomePage/StudentContent1.jsx";

function Home_Student() {
    return (
        <div>
          <Header />
          <Banner />  
          <StudentContent1 />     
          <Footer />
        </div>
      );
    }

export default Home_Student
