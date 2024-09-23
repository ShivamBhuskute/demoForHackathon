// import React from "react";

// function TodoCard() {
//     return (
//             <div className="bg-blue-400 p-6 rounded-lg shadow-md w-full max-w-md h-[45vh] mt-5">
//             <div className="flex flex-col items-center space-y-4">
//                 {/* Todo Box */}
//                 <div className="bg-white p-4 rounded-lg w-full h-full flex flex-col">
//                     {/* Search Box */}
//                         <h1 className="font-bold inline-block text-center">Todos</h1>
//                     <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mb-4">
//                         <svg
//                             className="h-5 w-5 text-gray-400"
//                             fill="none"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                         </svg>
//                         <input
//                             type="text"
//                             className="bg-gray-100 ml-2 w-full focus:outline-none"
//                             placeholder="Search todos..."
//                         />
//                     </div>
//                     {/* Scrollable Todo List */}
//                     <div className="flex-1 overflow-y-auto space-y-2">
//                         {/* Todo Item */}
//                         <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-2">
//                             <div className="flex items-center">
//                                 <input type="checkbox" className="mr-2" />
//                                 <span>Complete project</span>
//                             </div>
//                             <button className="text-gray-400 hover:text-gray-600">
//                                 <svg
//                                     className="h-5 w-5"
//                                     fill="none"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path d="M6 18L18 6M6 6l12 12"></path>
//                                 </svg>
//                             </button>
//                         </div>
//                         {/* Add more todo items here */}
//                         <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-2">
//                             <div className="flex items-center">
//                                 <input type="checkbox" className="mr-2" />
//                                 <span>Complete homework</span>
//                             </div>
//                             <button className="text-gray-400 hover:text-gray-600">
//                                 <svg
//                                     className="h-5 w-5"
//                                     fill="none"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path d="M6 18L18 6M6 6l12 12"></path>
//                                 </svg>
//                             </button>
//                         </div>
//                         {/* Add more todo items as needed */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TodoCard;

import React, { useState } from "react";

function TodoCard() {
    const [todos, setTodos] = useState([
        { id: 1, task: "📚 Complete homework", completed: false },
        { id: 2, task: "✨ ajbs", completed: false }
    ]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { id: Date.now(), task: `✨ ${newTodo}`, completed: false }]);
        setNewTodo("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-full max-w-md h-[45vh] mt-5 flex flex-col">
            <div className="bg-white p-4 rounded-lg w-full h-full flex flex-col space-y-4">
                {/* Header */}
                <h1 className="font-bold text-center text-lg flex items-center justify-center">
                    <span role="img" aria-label="todo-icon">📝</span> Todos
                </h1>
                
                {/* Search Box */}
                <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mb-2">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input
                        type="text"
                        className="bg-gray-100 ml-2 w-full focus:outline-none"
                        placeholder="🔍 Search todos..."
                    />
                </div>

                {/* New Todo Input */}
                <div className="flex space-x-2">
                    <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full">
                        <svg
                            className="h-5 w-5 text-gray-400 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 4v16m8-8H4"></path>
                        </svg>
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            className="bg-gray-100 w-full focus:outline-none"
                            placeholder="Add new todo..."
                        />
                    </div>
                    <button
                        onClick={addTodo}
                        className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition flex items-center space-x-1"
                    >
                        <span>➕</span>
                    </button>
                </div>

                {/* Scrollable Todo List */}
                <div className="flex-1 overflow-y-auto space-y-2">
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className={`flex items-center justify-between bg-gray-100 rounded-md px-3 py-2 ${
                                todo.completed ? "opacity-50" : ""
                            }`}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                />
                                <span className={`${todo.completed ? "line-through" : ""}`}>
                                    {todo.task}
                                </span>
                            </div>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                className="text-red-500 hover:text-red-700 transition flex items-center space-x-1"
                            >
                                <span>❌</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoCard;
