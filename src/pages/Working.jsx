// import React, { useEffect, useState } from "react";

// const AnimatedBox = () => {
//     const [openBoxes, setOpenBoxes] = useState(Array(4).fill(false)); // Array to track open state of each box
//     const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

//     // Effect to open the first box immediately with a delay
//     useEffect(() => {
//         // Open the first box immediately on mount with a timeout
//         const timer = setTimeout(() => {
//             setOpenBoxes((prev) => {
//                 const newOpenBoxes = [...prev];
//                 newOpenBoxes[0] = true; // Open the first box immediately
//                 return newOpenBoxes;
//             });
//         }, 100); // Delay to allow for the initial render

//         return () => clearTimeout(timer); // Cleanup the timer
//     }, []);

//     const handleScroll = () => {
//         const currentScrollY = window.scrollY;

//         // Determine scroll direction
//         if (currentScrollY > lastScrollY) {
//             // Scrolling down
//             setOpenBoxes((prev) => {
//                 return prev.map((isOpen, index) => {
//                     // Open boxes alternately from left and right
//                     if (
//                         !isOpen &&
//                         index === Math.floor(currentScrollY / 100) &&
//                         index < openBoxes.length
//                     ) {
//                         return true; // Open the box at the current index
//                     }
//                     return isOpen; // Keep the current state
//                 });
//             });
//         } else {
//             // Scrolling up
//             setOpenBoxes((prev) => {
//                 return prev.map((isOpen, index) => {
//                     // Close boxes alternately from left and right
//                     if (
//                         isOpen &&
//                         index === Math.floor(currentScrollY / 100) &&
//                         index < openBoxes.length
//                     ) {
//                         return false; // Close the box at the current index
//                     }
//                     return isOpen; // Keep the current state
//                 });
//             });
//         }

//         // Update last scroll position
//         setLastScrollY(currentScrollY);
//     };

//     // Effect to handle scroll events
//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [lastScrollY]);

//     return (
//         <>
//             {openBoxes.map((isOpen, index) => (
//                 <div
//                     key={index}
//                     className={`
//             h-64 w-5/12 sm:w-5/6 md:w-2/5 bg-white rounded-xl shadow-xl p-6
//             flex items-center justify-center relative
//             transition-all duration-500 my-8 mx-auto
//             ${
//                 isOpen
//                     ? "translate-x-0 opacity-100"
//                     : index === 0
//                     ? "-translate-x-full opacity-0"
//                     : index % 2 === 0
//                     ? "-translate-x-full opacity-0"
//                     : "translate-x-full opacity-0"
//             }
//           `}
//                 >
//                     <div className="absolute top-0 left-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center transform -translate-x-5 -translate-y-5">
//                         <span className="text-white text-xl">{index + 1}</span>
//                     </div>
//                     <div className="flex flex-col justify-center items-center">
//                         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
//                             {isOpen
//                                 ? `Box ${index + 1} is Open!`
//                                 : `Box ${index + 1}`}
//                         </h2>
//                         <p className="text-gray-500 text-sm sm:text-base text-center">
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Vel, nam!
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };

// // export default AnimatedBox;

// function Working() {
//     return (
//         <div className="overflow-auto bg-gray-900">
//             <div></div>
//             <AnimatedBox />
//         </div>
//     );
// }

// export default Working;

// !const AnimatedBox = () => {
//     // Define an array of content for each box
//     const boxContent = [
//         {
//             title: "Box 1 Title",
//             description:
//                 "This is the content for Box 1. It contains unique information.",
//         },
//         {
//             title: "Box 2 Titles",
//             description:
//                 "This is the content for Box 2. It has different details.",
//         },
//         {
//             title: "Box 3 Title",
//             description:
//                 "This is the content for Box 3. Here is some more unique info.",
//         },
//         {
//             title: "Box 4 Title",
//             description:
//                 "This is the content for Box 4. Each box has its own content.",
//         },
//         {
//             title: "Box 5 Title",
//             description:
//                 "This is the content for Box 5. Each box has its own content.",
//         },
//         {
//             title: "Box 6 Title",
//             description:
//                 "This is the content for Box 6. Each box has its own content.",
//         },
//         {
//             title: "Box 6 Title",
//             description:
//                 "This is the content for Box 6. Each box has its own content.",
//         },
//         {
//             title: "Box 6 Title",
//             description:
//                 "This is the content for Box 6. Each box has its own content.",
//         },
//         {
//             title: "Box 6 Title",
//             description:
//                 "This is the content for Box 6. Each box has its own content.",
//         },
//     ];
//     const [openBoxes, setOpenBoxes] = useState(Array(boxContent.length).fill(false)); // Array to track open state of each box
//     const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

//     // Effect to open the first box immediately with a delay
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setOpenBoxes((prev) => {
//                 const newOpenBoxes = [...prev];
//                 newOpenBoxes[0] = true; // Open the first box immediately
//                 return newOpenBoxes;
//             });
//         }, 100); // Delay to allow for the initial render

//         return () => clearTimeout(timer); // Cleanup the timer
//     }, []);

//     const handleScroll = () => {
//         const currentScrollY = window.scrollY;

//         // Determine scroll direction
//         if (currentScrollY > lastScrollY) {
//             // Scrolling down
//             setOpenBoxes((prev) => {
//                 return prev.map((isOpen, index) => {
//                     // Open boxes alternately from left and right
//                     if (
//                         !isOpen &&
//                         index === Math.floor(currentScrollY / 100) &&
//                         index < openBoxes.length
//                     ) {
//                         return true; // Open the box at the current index
//                     }
//                     return isOpen; // Keep the current state
//                 });
//             });
//         } else {
//             // Scrolling up
//             setOpenBoxes((prev) => {
//                 return prev.map((isOpen, index) => {
//                     // Close boxes alternately from left and right
//                     if (
//                         isOpen &&
//                         index === Math.floor(currentScrollY / 100) &&
//                         index < openBoxes.length
//                     ) {
//                         return false; // Close the box at the current index
//                     }
//                     return isOpen; // Keep the current state
//                 });
//             });
//         }

//         // Update last scroll position
//         setLastScrollY(currentScrollY);
//     };

//     // Effect to handle scroll events
//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [lastScrollY]);

//     return (
//         <>
//             {openBoxes.map((isOpen, index) => (
//                 <div
//                     key={index}
//                     className={`
//             h-64 w-5/12 sm:w-5/6 md:w-2/5 bg-white rounded-xl shadow-xl p-6
//             flex items-center justify-center relative
//             transition-all duration-500 my-8 mx-auto
//             ${
//                 isOpen
//                     ? "translate-x-0 opacity-100"
//                     : index === 0
//                     ? "-translate-x-full opacity-0"
//                     : index % 2 === 0
//                     ? "-translate-x-full opacity-0"
//                     : "translate-x-full opacity-0"
//             }
//           `}
//                 >
//                     <div className="absolute top-0 left-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center transform -translate-x-5 -translate-y-5">
//                         <span className="text-white text-xl">{index + 1}</span>
//                     </div>
//                     <div className="flex flex-col justify-center items-center">
//                         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
//                             {isOpen
//                                 ? `${boxContent[index].title} `
//                                 : boxContent[index].title}
//                         </h2>
//                         <p className="text-gray-500 text-sm sm:text-base text-center">
//                             {isOpen
//                                 ? boxContent[index].description
//                                 : "Click to open the box."}
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };

// // export default AnimatedBox;

// function Working() {
//     return (
//         <div className="overflow-auto bg-gray-900">
//             {/* <div></div> */}
//             <AnimatedBox />
//         </div>
//     );
// }

// export default Working;
import React, { useEffect, useState } from "react";

const AnimatedBox = () => {
    // Define an array of content for each box
    const boxContent = [
        {
            title: "Box 1 Title",
            description:
                "This is the content for Box 1. It contains unique information.",
        },
        {
            title: "Box 2 Title",
            description:
                "This is the content for Box 2. It has different details.",
        },
        {
            title: "Box 3 Title",
            description:
                "This is the content for Box 3. Here is some more unique info.",
        },
        {
            title: "Box 4 Title",
            description:
                "This is the content for Box 4. Each box has its own content.",
        },
        {
            title: "Box 5 Title",
            description:
                "This is the content for Box 5. Each box has its own content.",
        },
    ];

    const [openBoxes, setOpenBoxes] = useState(
        Array(boxContent.length).fill(false)
    ); // Array to track open state of each box
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    // Effect to open the first box immediately with a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenBoxes((prev) => {
                const newOpenBoxes = [...prev];
                newOpenBoxes[0] = true; // Open the first box immediately
                return newOpenBoxes;
            });
        }, 100); // Delay to allow for the initial render

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Determine scroll direction
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setOpenBoxes((prev) => {
                return prev.map((isOpen, index) => {
                    // Open boxes alternately from left and right
                    const boxIndex = Math.floor(currentScrollY / 100);
                    if (
                        !isOpen &&
                        index === boxIndex &&
                        index < openBoxes.length
                    ) {
                        return true; // Open the box at the current index
                    }
                    return isOpen; // Keep the current state
                });
            });
        } else {
            // Scrolling up
            setOpenBoxes((prev) => {
                return prev.map((isOpen, index) => {
                    // Close boxes alternately from left and right
                    const boxIndex = Math.floor(currentScrollY / 100);
                    if (
                        isOpen &&
                        index === boxIndex &&
                        index < openBoxes.length
                    ) {
                        return false; // Close the box at the current index
                    }
                    return isOpen; // Keep the current state
                });
            });
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
    };

    // Effect to handle scroll events
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            {openBoxes.map((isOpen, index) => (
                <div
                    key={index}
                    className={`
            h-64 w-5/12 sm:w-5/6 md:w-2/5 bg-white rounded-xl shadow-xl p-6
            flex items-center justify-center relative
            transition-all duration-500 my-8 mx-auto
            ${
                isOpen
                    ? "translate-x-0 opacity-100"
                    : index === 0
                    ? "-translate-x-full opacity-0"
                    : index % 2 === 0
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
            }
          `}
                >
                    <div className="absolute top-0 left-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center transform -translate-x-5 -translate-y-5">
                        <span className="text-white text-xl">{index + 1}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                            {isOpen
                                ? `${boxContent[index].title} `
                                : boxContent[index].title}
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base text-center">
                            {isOpen
                                ? boxContent[index].description
                                : "Click to open the box."}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

// export default AnimatedBox;

function Working() {
    return (
        <div className="overflow-auto bg-gray-900">
            <AnimatedBox />
        </div>
    );
}

export default Working;
