
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import alert from "../../images/alert.png";
import counselling from "../../images/counselling.png";
import parent from "../../images/parent.png";
import yoga from "../../images/yoga.png";
import games from "../../images/games.png";
import SEL from "../../images/SEL.png"
import blended_learning from "../../images/blended_learning.png"
import Helpline from "../../images/Helpline.png"

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
        // Existing cards...
        {
            id: 1, 
            title: 'At-risk students early detection and support', 
            content: "Our AI-driven early detection system identifies at-risk students by analyzing attendance, grades, homework streaks, and test scores, along with socio-emotional factors like mental health and financial challenges. This approach enables timely interventions and personalized support to enhance student engagement and academic success.",
            image: alert 
        },
        {
            id: 2, 
            title: 'Output Based Personalized Counselling', 
            content: 'Leveraging student performance data and behavioral insights, our system offers output-based personalized counseling. By identifying academic, emotional, and behavioral challenges, it generates specific, tailored counseling sessions to meet each student’s unique needs. Counselors are equipped with actionable data to provide effective guidance and support, improving student well-being and academic performance.',
            image: counselling 
        },
        {
            id: 3, 
            title: 'Enhanced Parental Involvement for Academic Monitoring', 
            content: 'Our platform enhances parental involvement by giving parents real-time access to their child’s academic performance, attendance, and behavior reports. Through the dedicated parental portal, they can track progress, communicate with teachers, and receive personalized recommendations on how to support their child’s learning at home. This active involvement leads to better academic outcomes and fosters a supportive learning environment.',
            image: parent 
        },
        {
            id: 4, 
            title: 'Gamification to Build Interest', 
            content: 'To make learning more engaging, our platform integrates gamification techniques such as point systems, leaderboards, and rewards. Students can unlock achievements and track progress through fun, interactive learning modules. By incorporating games and challenges, this feature boosts student motivation, promotes active learning, and helps in developing long-term academic interest.',
            image: games 
        },
        {
            id: 5, 
            title: 'Yoga for Stress Management', 
            content: 'Recognizing the mental health challenges students face, our platform offers guided yoga and mindfulness exercises tailored to help students manage stress. These sessions are designed to enhance focus, reduce anxiety, and improve overall well-being. By incorporating yoga into daily routines, students can develop healthy coping mechanisms, which positively impact their academic performance and personal growth.',
            image: yoga 
        },
        {
            id: 6,
            title: 'Instant Helpline Support',
            content: 'Rapid response helplines provide immediate assistance to at-risk students. By connecting them with trained professionals, students receive timely support during critical moments, ensuring their concerns are addressed promptly and effectively. This feature not only fosters a sense of safety and security but also empowers students to seek help without hesitation, ultimately promoting their mental health and academic success. Whether facing personal issues or academic pressures, students have access to a reliable resource when they need it most.',
            image: Helpline // You can replace with a suitable image
        },
        {
            id: 7,
            title: 'Blended Learning Model',
            content: 'Combining online and offline methods, our blended learning model makes education more accessible. This approach allows students to benefit from the flexibility of online resources while still engaging in meaningful face-to-face interactions. By offering a diverse range of learning formats, including virtual classrooms, recorded lectures, and hands-on activities, we cater to different learning styles and preferences. This model not only enhances student engagement but also fosters a collaborative learning environment where students can connect with peers and instructors effectively, leading to improved academic outcomes.',
            image: blended_learning  // You can replace with a suitable image
        },
        {
            id: 8,
            title: 'Social-Emotional Learning (SEL)',
            content: 'Our program enhances students’ emotional resilience and well-being through social-emotional learning initiatives. By focusing on skills like empathy, self-regulation, and interpersonal communication, students are better equipped to navigate challenges in their academic and personal lives. Our SEL curriculum includes interactive workshops and mindfulness exercises that encourage self-reflection and emotional intelligence. By prioritizing these skills, we aim to create a supportive school culture where students feel valued and understood, contributing to a more positive learning environment and better overall mental health.',
            image: SEL // You can replace with a suitable image
        }
    ];
    

    return (
        <div className="w-full max-w-2xl mx-auto relative mt-7 p-6 ">
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
