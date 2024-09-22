// import React from 'react'
// import Header from "../components/HomePage/Header.jsx";
// import Banner from "../components/HomePage/Banner.jsx";
// import Footer from "../components/HomePage/Footer.jsx";
// import UniversityContent1 from "../components/HomePage/UniveristyContent1.jsx";
// import ChatWidget from "../components/ChatWidget";


// function Home_University() {
//     return (
//         <div>
//           <Header />
//           <Banner />  
//           <UniversityContent1 /> 
//           <ChatWidget />
//           <Footer />
//         </div>
//       );
//     }

// export default Home_University

import React from 'react'
import Header from "../components/HomePage/Header.jsx";
import Banner from "../components/HomePage/Banner.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import UniversityContent1 from "../components/HomePage/UniveristyContent1.jsx";
import ChatWidget from "../components/ChatWidget";


function Home_University() {
    return (
        <div>
          {/* Header with fixed position */}
          <div className="fixed w-full z-50">
            <Header />
          </div>

          {/* Main content with padding to avoid being hidden by the fixed header */}
          <div className="pt-24">
            <Banner />  
            <UniversityContent1 /> 
            <ChatWidget />
            <Footer />
          </div>
        </div>
      );
    }

export default Home_University
