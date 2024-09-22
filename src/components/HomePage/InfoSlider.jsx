// 


import React from 'react';

const InfoSlider = () => {
    const cards = [
        { id: 1, title: 'Diagnose', content: 'Preliminary test to check concept clarity and preparedness in any topic.', bgColor: 'bg-blue-100', image: 'https://www.extramarks.com/static/media/dignose.0b0e9792.svg' },
        { id: 2, title: 'Learn', content: 'Explore the vast content repository with 2D and 3D content on various topics for a fun and effective learning experience.', bgColor: 'bg-green-100', image: 'https://www.extramarks.com/static/media/learn.30f34f79.svg' },
        { id: 3, title: 'Practice', content: 'Solve unlimited practice questions in every topic in MCQ- and subjective-format and get a 360-degree understanding of all concepts.', bgColor: 'bg-red-100', image: 'https://www.extramarks.com/static/media/test.2ed24a63.svg' },
        { id: 4, title: 'Test', content: 'Evaluate your knowledge with topic-based tests and receive a detailed performance report to track your progress.', bgColor: 'bg-yellow-100', image: 'https://www.extramarks.com/static/media/evaluate.c3bf3e62.svg' },
        { id: 5, title: 'Evaluate', content: 'Evaluate your knowledge with topic-based tests and receive a detailed performance report to track your progress.', bgColor: 'bg-purple-100', image: 'https://edas.tech/wp-content/uploads/2022/10/log.png' },
    ];

    return (
        <div className='bg-gradient-to-r from-blue-600 to-blue-200 p-10 flex-row justify-center content-center items-center'>
            <div className="overflow-x-auto scrollbar-hide mt-7 p-4" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                <style>
                    {`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}
                </style>

                <div className="flex space-x-4">
                    {cards.map(card => (
                        <div key={card.id} className={`${card.bgColor} flex-none w-[40rem] h-64 rounded-lg shadow-lg p-4 flex items-center`}>
                            {/* Left Side Text */}
                            <div className="w-1/2">
                                <h1 className="text-3xl font-bold mb-2">{card.title}</h1>
                                <p className="text-lg">{card.content}</p>
                            </div>
                            {/* Right Side Image */}
                            {card.image && (
                                <div className="w-1/2 flex justify-center">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-48 h-auto object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center content-center items-center'>
                <button className='bg-blue-600 text-3xl text-white p-3 rounded-xl '>
                    Get Started
                </button>

            </div>
        </div>
    );
};

export default InfoSlider;
