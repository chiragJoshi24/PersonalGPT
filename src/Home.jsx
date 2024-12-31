import { useState } from 'react';
import logo from '/logo.svg';
import Message from './Components/Message';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    async function handleSubmit(event) {
        if (event) event.preventDefault();

        if (!inputValue.trim()) {
            alert('Input cannot be empty');
            return;
        }

        setMessages([...messages, { text: inputValue, isUserMessage: true }]);
        setInputValue('');

        try {
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputValue }),
            });
            const data = await response.json();
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: data.response, isUserMessage: false },
            ]);
        } catch (err) {
            console.log('error:' + err);
        }
    }

    return (
        <div className="h-screen bg-gradient-to-b from-backgroundDark to-gray-950 flex flex-col px-6 sm:px-40 w-full justify-center">
            <div className="flex items-center justify-between pt-4 pb-2">
                <div className="flex items-center gap-2 lg:gap-4">
                    <img src={logo} alt="Logo" className="h-14" />
                    <div className="text-red-400 font-extrabold text-4xl">
                        PersonalGPT
                    </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-6">
                    <a
                        href="https://github.com/chiragJoshi24/PersonalGPT"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github text-4xl hover:text-red-400 transition duration-300"></i>
                    </a>
                    <a href="#" target="_blank" rel="nooperner noreferrer">
                        <i className="fa fa-cog text-4xl hover:text-red-400 transition duration-300"></i>
                    </a>
                </div>
            </div>
            <div id="chat-container" className="h-[70%] mt-6 bg-gray-800 rounded-xl overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 p-4 relative">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} isUserMessage={msg.isUserMessage} />
                ))}
            </div>
            <div className='flex w-full justify-center'>
                <button 
                    onClick={() => setMessages([])} 
                    className="my-1 hover:underline transition duration-100">
                    Click here to delete all chat history
                </button>
            </div>
            <div className="flex items-center pr-4">
                <input
                    type="text"
                    className="h-12 bg-gray-700 rounded-xl p-4 w-[98%] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit(e);
                        }
                    }}
                />
                <div className="w-[5%] gap-6 flex px-3 lg:ml-4">
                    <button
                        onClick={handleSubmit}
                        className="hover:text-red-400 transition duration-300"
                    >
                        <i className="fa fa-paper-plane text-white cursor-pointer text-3xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
