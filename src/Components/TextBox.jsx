import React, { useState } from 'react';

const TextBox = () => {
    const [text, updateText] = useState('');

    function handleSubmit(){
        
    }

    return (
        <div className="flex items-center mt-5 pr-3">
            <input
                type="text"
                className="h-10 bg-[#182334] rounded-xl pl-4 w-[95%] text-white"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => updateText(e.target.value)}
            />
            <div className="w-[5%] gap-5 flex px-3 lg:ml-3">
                <button onClick={handleSubmit}>
                    <i className="fa fa-paper-plane text-white cursor-pointer text-2xl"></i>
                </button>
            </div>
        </div>
    );
};

export default TextBox;