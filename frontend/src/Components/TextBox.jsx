import React from 'react';

const TextBox = () => {
    return (
        <div className="flex items-center space-x-8 mt-2 pr-3">
            <input 
                type="text"  
                className="h-10 bg-[#182334] rounded-xl mt-3 pl-2 w-[90%] text-white" 
                placeholder="Type a message..."
            />
            <i className="fa-solid fa-paperclip text-white cursor-pointer text-2xl"></i>
            <i className="fa-solid fa-microphone text-white cursor-pointer text-2xl"></i>
            <i className="fa-solid fa-right-long text-white cursor-pointer text-2xl"></i>
        </div>
    );
};

export default TextBox;
