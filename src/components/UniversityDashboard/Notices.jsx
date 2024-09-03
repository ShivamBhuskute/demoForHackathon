import React, { useState } from "react";

function Notices() {
    const [notices, setNotices] = useState(["Meeting at 3 PM"]);
    const [newNotice, setNewNotice] = useState("");
    const addNotice = () => {
        if (newNotice) {
          setNotices([...notices, newNotice]);
          setNewNotice("");
        }
      };
    
      const removeNotice = (index) => {
        setNotices(notices.filter((_, i) => i !== index));
      };
    return (
        <div className="bg-yellow-200 p-4 rounded-md shadow-md text-center">
            <h4 className="font-bold">NOTICE</h4>
            <div>
              {notices.map((notice, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <p className="text-gray-700">{notice}</p>
                  <button onClick={() => removeNotice(index)} className="text-red-500">❌</button>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={newNotice}
              onChange={(e) => setNewNotice(e.target.value)}
              className="mt-2 p-2 border rounded-md w-full"
              placeholder="Add a new notice..."
            />
            <button onClick={addNotice} className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full">Add Notice</button>
          </div>
    )
}

export default Notices