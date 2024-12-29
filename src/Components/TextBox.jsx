import { useState } from 'react';

const TextBox = () => {
    const [inputValue, setInputValue] = useState('');

    async function handleSubmit(event) {
        if (event) event.preventDefault();

        if (!inputValue.trim()) {
            alert('Input cannot be empty');
            return;
        }
        console.log(inputValue);
        try {
            const response = await fetch('../backend/main.py', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                text: JSON.stringify({ message: inputValue }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="flex items-center mt-5 pr-3">
            <input
                type="text"
                className="h-10 bg-[#182334] rounded-xl p-4 w-[95%] text-white"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit(e);
                    }
                }}
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
