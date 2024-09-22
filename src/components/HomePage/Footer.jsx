
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Add this import if using npm

const Footer = () => {
    const [isOpen, setIsOpen] = useState({
        platform: false,
        about: false,
        whyChoose: false,
        benefits: false,
    });

    const toggleSection = (section) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-8">


            <div className="container mx-auto px-4">
                {/* WiseTracks Platform */}
                <div>
                    <button
                        onClick={() => toggleSection('platform')}
                        className="flex items-center w-full text-lg font-semibold py-3"
                    >
                        <span className={`transform transition-transform mr-2 ${isOpen.platform ? 'rotate-180' : 'rotate-0'}`}>
                            &#x25BC;
                        </span>
                        About Us
                    </button>
                    {isOpen.platform && (
                        <div className="ml-6 text-gray-400">
                            <p>At Wisetrack, we are dedicated to transforming the educational landscape through technology. Our mission is to address the critical issue of student dropout rates by leveraging innovative software solutions that provide early detection and personalized support.
                                At Wisetrack, our goal is to enhance student retention and ensure equitable access to education. By integrating these innovative solutions, we align with the National Education Policy (NEP) 2020’s vision of improving educational outcomes and supporting every student’s success.
                            </p>
                        </div>
                    )}
                </div>

                {/* About Us */}
                <div>
                    <button
                        onClick={() => toggleSection('about')}
                        className="flex items-center w-full text-lg font-semibold py-3"
                    >
                        <span className={`transform transition-transform mr-2 ${isOpen.about ? 'rotate-180' : 'rotate-0'}`}>
                            &#x25BC;
                        </span>
                        Why Choose WiseTracks?
                    </button>
                    {isOpen.about && (
                        <div className="ml-6 text-gray-400">
                            <p>
                                <ul>
                                    <li>1. AI-Driven Insights:  Predicts at-risk students early, enabling timely interventions.</li>
                                    <li>2. Personalized Support:  Tailored learning plans and engagement tools to meet individual student needs.</li>
                                    <li>3. Flexible Learning:  Offers options like evening classes, part-time programs, and mobile learning.</li>
                                    <li>4. Community Learning Hubs:  Provides additional support in rural and underserved areas.</li>
                                    <li>5. Parental Engagement:  Facilitates communication and progress tracking for parents.</li>
                                    <li>6. Aligned with NEP 2020:   Supports the National Education Policy’s goals for reducing dropout rates and promoting equitable education.</li>
                                    <li>7. Helpline and organization:   We'll create a rapid-response service linking at-risk students to emergency helplines and mental health support</li>
                                </ul>
                            </p>
                        </div>
                    )}
                </div>

                {/* Why Choose WiseTracks */}
                <div>
                    <button
                        onClick={() => toggleSection('whyChoose')}
                        className="flex items-center w-full text-lg font-semibold py-3"
                    >
                        <span className={`transform transition-transform mr-2 ${isOpen.whyChoose ? 'rotate-180' : 'rotate-0'}`}>
                            &#x25BC;
                        </span>
                        Benefits of Using WiseTracks
                    </button>
                    {isOpen.whyChoose && (
                        <div className="ml-6 text-gray-400">
                            <p>
                                <li>Understanding the Dropout Dilemma: Student dropout rates are influenced by a range of factors, including socio-economic barriers, disengagement, and academic struggles. Traditional education systems often fail to meet the diverse needs of every student, leading to an increased risk of dropout. At Wisetrack, we recognize that understanding these challenges is the first step towards effective intervention.</li>
                                <li>AI-Driven Early Warning System: Our platform utilizes cutting-edge AI technology to analyze comprehensive student data—such as attendance, grades, and behavioral patterns. By predicting which students are at risk of dropping out, our system enables educators to take proactive measures. Real-time alerts, predictive analytics, and data visualization tools ensure timely and targeted interventions.</li>
                                <li>Community Learning Hub Platform: Wisetrack bridges gaps in educational support, particularly in rural and underserved areas, through our Community Learning Hub. This online platform offers digital resources, virtual tutoring, and community forums, fostering an environment where students receive additional support and engagement.</li>
                                <li>Mobile Learning Application: To address the needs of students with limited access to traditional education, we offer a mobile learning app. This app provides interactive lessons, quizzes, and educational games tailored to individual learning paths, making education more accessible and engaging.</li>
                                <li>Financial Support Management System: Economic barriers can contribute significantly to student dropout rates. Our Financial Support Management System streamlines the application and tracking of scholarships and financial aid, helping to alleviate financial stress and support students in their educational journey.</li>
                                <li>Parental Engagement Portal: Engaging parents is crucial for student success. Our Parental Engagement Portal equips parents with tools to track their child’s progress, access educational resources, and communicate with teachers, fostering a supportive home environment.</li>
                                <li>Flexible Schooling Management System: Recognizing the diverse needs of students, our system manages flexible schooling options such as evening classes and part-time programs. This flexibility allows students to balance education with personal responsibilities and interests.</li>
                                <li>Student Support and Engagement App: Designed specifically for students at risk of dropping out, this app offers personalized counseling, motivational content, and goal-setting tools. It helps students stay engaged and motivated, providing the support they need to overcome challenges.</li>
                            </p>
                        </div>
                    )}
                </div>

                {/* Benefits of Using WiseTracks */}
                <div>
                    <button
                        onClick={() => toggleSection('benefits')}
                        className="flex items-center w-full text-lg font-semibold py-3"
                    >
                        <span className={`transform transition-transform mr-2 ${isOpen.benefits ? 'rotate-180' : 'rotate-0'}`}>
                            &#x25BC;
                        </span>
                        Our Vision                    </button>
                    {isOpen.benefits && (
                        <div className="ml-6 text-gray-400">
                            <p>We envision a future where every student, regardless of their socio-economic background or personal challenges, has equal access to quality education and the support necessary to succeed. Wisetrack aims to revolutionize the educational landscape by leveraging advanced technologies like AI and data analytics to detect at-risk students early, provide personalized learning experiences, and ensure timely, targeted interventions. <br/> <br/> Our goal is to empower educators, engage parents, and build a supportive community around students, fostering an environment where students are motivated to continue their education. We are committed to reducing dropout rates significantly, ensuring that education is not only accessible but also meaningful and engaging for all learners. <br/> <br/> Through innovation, collaboration, and a student-centric approach, Wisetrack strives to create an educational ecosystem where every student’s unique needs are addressed, helping them overcome obstacles, achieve their academic goals, and unlock their full potential. We align with the vision of NEP 2020 to make education universally accessible and to build a strong foundation for lifelong learning.</p>
                        </div>
                    )}
                </div>




                <div className="container mx-auto px-4 mt-8">
                    <div className="flex justify-between">
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold">Support</h2>
                            <ul className="space-y-2">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Help & Support</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-bold">Contact Us</h2>
                            <ul className="space-y-2">
                                <li>Phone: 1800-123-4567</li>
                                <li>Email: info@wisetrack.com</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold ">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Gamification</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Motivational Content</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>




                {/* Footer Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-400">&copy; 2024 WiseTrack. All rights reserved.</p>

                    <div className="flex space-x-4">
                        {/* Icons */}
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

            </div>

            {/* top going
            <div className="fixed bottom-8 right-4">
                <a href="#top" className="bg-orange-500 text-white p-5 rounded-full shadow-lg">
                    <i className="fas fa-arrow-up"></i>
                </a>
            </div> */}
        </footer>
    );
};

export default Footer;
