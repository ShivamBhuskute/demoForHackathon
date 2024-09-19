import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 animate-fadeIn">
      <div className="container mx-auto text-center">
        <h1 className="text-8xl font-bold tracking-tight animate-slideInLeft">
          WiseTrack
        </h1>
        <p className="mt-4 text-xl animate-slideInRight">
          NO STUDENT LEFT BEHIND
        </p>
      </div>
    </section>
  );
};

export default Banner;



// import React from 'react';

// const Banner = () => {
//   return (
//     <section className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white py-20 animate-fadeIn shadow-xl">
//       <div className="container mx-auto text-center">
//         <h1 className="text-6xl font-bold tracking-tight animate-slideInLeft drop-shadow-md">
//           WiseTrack
//         </h1>
//         <p className="mt-4 text-xl animate-slideInRight">
//           NO STUDENT LEFT BEHIND
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Banner;
