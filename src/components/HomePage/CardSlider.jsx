import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import alert from "../../images/alert.png"
import counselling from "../../images/counselling.png"
import parent from "../../images/parent.png"
import yoga from "../../images/yoga.png"
import games from "../../images/games.png"

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

    return (
        <div className="w-full max-w-xl mx-auto relative mt-7 p-4">
            <Slider {...settings}>
                {cards.map(card => (
                    <div 
                      key={card.id} 
                      className="p-4 bg-gradient-to-b from-sky-200 to-blue-700 rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl h-[600px] relative overflow-hidden"
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
                background: '#f97316',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                position: 'absolute',
                right: '-55px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onClick={onClick}
        >
            <span className="text-white text-xl">&#x276F;</span>
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
                background: '#f97316',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                position: 'absolute',
                left: '-55px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onClick={onClick}
        >
            <span className="text-white text-xl">&#x276E;</span>
        </div>
    );
};

export default CardSlider;