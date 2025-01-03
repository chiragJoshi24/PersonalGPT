import { useState, useRef, useEffect } from 'react';
import logo from '/logo.svg';
import Message from './Components/Message';
import ThinkingAnimation from './Animations/ThinkingAnimation';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({ 
                top: chatContainerRef.current.scrollHeight, 
                behavior: 'smooth' 
            });
        }
    }, [messages]);

    async function handleSubmit(event) {
        if (event) event.preventDefault();

        if (!inputValue.trim()) {
            return;
        }

        setMessages([...messages, { text: inputValue, isUserMessage: true }]);
        setInputValue('');
        setLoading(true);

        try {
            const response = await fetch('https://backend-6az5.onrender.com', {
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
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "I'm sorry, but I can't help you at this time. Please check your Internet Connection or try again later.", isUserMessage: false },
            ]);
            console.log(err.message || err);
        } finally {
            setLoading(false);
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
            <div
                id="chat-container"
                className="h-[70%] mt-6 bg-gray-800 rounded-xl overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 p-4 relative"
                ref={chatContainerRef}
            >
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        text={msg.text}
                        isUserMessage={msg.isUserMessage}
                    />
                ))}
                {loading && <ThinkingAnimation />}
            </div>
            <div className="flex w-full justify-center">
                <button
                    onClick={() => setMessages([])}
                    className="my-1 hover:underline transition duration-100"
                >
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
                        if (e.key === 'Enter' && !loading) {
                            handleSubmit(e);
                        }
                    }}
                />
                <div className="w-[5%] gap-6 flex px-3 lg:ml-4">
                    <button
                        onClick={handleSubmit}
                        className="hover:text-red-400 transition duration-300"
                        disabled={loading}
                    >
                        <i className="fa fa-paper-plane text-white cursor-pointer text-3xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
