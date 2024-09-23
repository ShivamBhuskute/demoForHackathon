
import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white h-screen w-full flex items-center justify-center animate-fadeIn shadow-xl">
      <div className="text-center px-4">
        <h1 className="text-8xl sm:text-6xl md:text-9xl font-bold tracking-tight animate-slideInLeft">
          WiseTrack
        </h1>
        <p className="mt-4 text-3xl sm:text-3xl md:text-4xl animate-slideInRight">
          NO STUDENT LEFT BEHIND
        </p>
      </div>
    </section>
  );
};

export default Banner;

// import React from 'react';
// import { useEffect, useState } from 'react';

// const Banner = () => {
//   const [scrolling, setScrolling] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolling(true);
//     } else {
//       setScrolling(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       className={`bg-gradient-to-r from-blue-950 to-blue-700 text-white h-screen w-full flex items-center justify-center transition-transform duration-500 ${scrolling ? 'transform translate-y-[-20%] opacity-90' : ''}`}
//     >
//       <div className="text-center px-4">
//         <h1 className={`text-8xl sm:text-6xl md:text-9xl font-bold tracking-tight transition-transform duration-500 ${scrolling ? 'animate-bounce' : ''}`}>
//           WiseTrack
//         </h1>
//         <p className={`mt-4 text-3xl sm:text-3xl md:text-4xl transition-transform duration-500 ${scrolling ? 'animate-fadeInUp' : ''}`}>
//           NO STUDENT LEFT BEHIND
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Banner;
