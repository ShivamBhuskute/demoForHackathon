// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import alert from "../../images/alert.png"
// import counselling from "../../images/counselling.png"
// import parent from "../../images/parent.png"
// import yoga from "../../images/yoga.png"
// import games from "../../images/games.png"

// const CardSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 400,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     };

//     const cards = [
//         { id: 1, title: 'At-risk students early detection and support', content: 'This is card number 1', image: alert },
//         { id: 2, title: 'Counselling', content: 'This is card number 2', image: counselling },
//         { id: 3, title: 'Enhanced Parental Involvement for Academic Monitoring', content: 'This is card number 3', image: parent },
//         { id: 4, title: 'Gamification to build the interest', content: 'This is card number 4', image: games },
//         { id: 5, title: 'Yoga for stress management', content: 'This is card number 5', image: yoga },
//     ];

//     return (
//         <div className="w-full max-w-2xl mx-auto relative mt-7 p-4">
//             <Slider {...settings}>
//                 {cards.map(card => (
//                     <div 
//                       key={card.id} 
//                       className="p-4 bg-gradient-to-b from-sky-200 to-blue-700 rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl h-[600px] relative overflow-hidden"
//                     >
//                         {/* Adding a gradient overlay for visual effect */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 pointer-events-none"></div>
                        
//                         {/* Adjusting the image style and adding a border for extra polish */}
//                         <img src={card.image} alt={card.title} className="w-60 h-48 mx-auto rounded-xl z-10 relative border-4 border-white shadow-lg" /> 
                        
//                         <div className="p-4 h-2/5 relative z-10">
//                             <h2 className="text-3xl font-extrabold mb-2 text-white drop-shadow-md">{card.title}</h2>
//                             <p className="text-lg text-white">{card.content}</p>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// const SampleNextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: 'block',
//                 background: '#f97316',
//                 borderRadius: '50%',
//                 width: '50px',
//                 height: '50px',
//                 position: 'absolute',
//                 right: '-55px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 zIndex: 2,
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             }}
//             onClick={onClick}
//         >
//             <span className="text-white text-xl">&#x276F;</span>
//         </div>
//     );
// };

// const SamplePrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: 'block',
//                 background: '#f97316',
//                 borderRadius: '50%',
//                 width: '50px',
//                 height: '50px',
//                 position: 'absolute',
//                 left: '-55px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 zIndex: 2,
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             }}
//             onClick={onClick}
//         >
//             <span className="text-white text-xl">&#x276E;</span>
//         </div>
//     );
// };

// export default CardSlider;
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import alert from "../../images/alert.png";
import counselling from "../../images/counselling.png";
import parent from "../../images/parent.png";
import yoga from "../../images/yoga.png";
import games from "../../images/games.png";

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const cards = [
        { id: 1, title: 'At-risk students early detection and support', content: 'This is card number 1', image: alert },
        { id: 2, title: 'Counselling', content: 'This is card number 2', image: counselling },
        { id: 3, title: 'Enhanced Parental Involvement for Academic Monitoring', content: 'This is card number 3', image: parent },
        { id: 4, title: 'Gamification to build the interest', content: 'This is card number 4', image: games },
        { id: 5, title: 'Yoga for stress management', content: 'This is card number 5', image: yoga },
    ];
    // const cards = [
    //     { id: 1, title: 'At-risk students early detection and support', content: 'This is card number 1', image: 'data:image/jpeg;base64,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' },
    //     { id: 2, title: 'Counselling', content: 'This is card number 2', image: counselling },
    //     { id: 3, title: 'Enhanced Parental Involvement for Academic Monitoring', content: 'This is card number 3', image: parent },
    //     { id: 4, title: 'Gamification to build the interest', content: 'This is card number 4', image: games },
    //     { id: 5, title: 'Yoga for stress management', content: 'This is card number 5', image: yoga },
    // ];

    return (
        <div className="w-full max-w-2xl mx-auto relative mt-7 p-4 ">
            <Slider {...settings}>
                {cards.map(card => (
                    <div 
                      key={card.id} 
                      className="p-8 bg-gradient-to-bl from-sky-200 to-indigo-950 rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl h-[600px] relative overflow-hidden"
                    >
                        {/* Adding a gradient overlay for visual effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 pointer-events-none"></div>
                        
                        {/* Adjusting the image style and adding a border for extra polish */}
                        <img src={card.image} alt={card.title} className="w-60 h-48 mx-auto rounded-xl z-10 relative border-4 border-white shadow-lg" /> 
                        
                        <div className="p-4 h-2/5 relative z-10">
                            <h2 className="text-3xl font-extrabold mb-2 text-white drop-shadow-md">{card.title}</h2>
                            <p className="text-lg text-white">{card.content}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: '#ffffff',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                position: 'absolute',
                right: '-65px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',  // Center the arrow
                lineHeight: '50px',   // Vertically center the arrow
            }}
            onClick={onClick}
        >
            {/* Right arrow */}
            <span className="text-black text-2xl">&#x2192;</span>
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: '#ffffff',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                position: 'absolute',
                left: '-65px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',  // Center the arrow
                lineHeight: '50px',   // Vertically center the arrow
            }}
            onClick={onClick}
        >
            {/* Left arrow */}
            <span className="text-black text-2xl">&#x2190;</span>
        </div>
    );
};

export default CardSlider;

// import React, { useState, useEffect } from 'react';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import alert from "../../../images/alert.png";
// import counselling from "../../../images/counselling.png";
// import parent from "../../../images/parent.png";
// import yoga from "../../../images/yoga.png";
// import games from "../../../images/games.png";

// const CardSlider = () => {
//     const [rotation, setRotation] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRotation((prevRotation) => (prevRotation + 1) % 360);
//         }, 50);

//         return () => clearInterval(interval);
//     }, []);

//     const cards = [
//         { id: 1, title: 'At-risk students early detection and support', content: 'This is card number 1', image: alert },
//         { id: 2, title: 'Counselling', content: 'This is card number 2', image: counselling },
//         { id: 3, title: 'Enhanced Parental Involvement for Academic Monitoring', content: 'This is card number 3', image: parent },
//         { id: 4, title: 'Gamification to build the interest', content: 'This is card number 4', image: games },
//         { id: 5, title: 'Yoga for stress management', content: 'This is card number 5', image: yoga },
//     ];

//     const radius = 300; // Adjust this value to change the size of the circle

//     return (
//         <div className="w-full max-w-2xl mx-auto relative mt-7 p-4 h-[600px]">
//             {cards.map((card, index) => {
//                 const angle = (index / cards.length) * 2 * Math.PI + (rotation * Math.PI) / 180;
//                 const x = Math.cos(angle) * radius;
//                 const z = Math.sin(angle) * radius;

//                 return (
//                     <div
//                         key={card.id}
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                         style={{
//                             transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px)`,
//                             zIndex: Math.floor(z + radius),
//                         }}
//                     >
//                         <Card cardData={card} />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const Card = ({ cardData }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleFlip = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div 
//           className="relative w-64 h-64 cursor-pointer perspective-1000"
//           onClick={handleFlip}
//         >
//           <div className={`absolute w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
//             <div className="absolute w-full h-full backface-hidden bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
//               <img src={cardData.image} alt={cardData.title} className="w-16 h-16 mb-4" />
//               <h3 className="text-lg font-bold text-center">{cardData.title}</h3>
//             </div>
//             <div className="absolute w-full h-full backface-hidden bg-blue-500 text-white shadow-lg rounded-lg p-4 flex items-center justify-center rotate-y-180">
//               <p className="text-center">{cardData.content}</p>
//             </div>
//           </div>
//         </div>
//     );
// };

// export default CardSlider;