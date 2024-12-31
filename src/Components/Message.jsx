import PropTypes from 'prop-types';
import bot from '../assets/bot.png';
import user from '../assets/user.webp';
import ReactMarkdown from 'react-markdown';

const Message = ({ text, isUserMessage }) => {
    return (
        <div className={`text-white flex text-lg p-3 rounded-lg mb-2 ${isUserMessage ? 'bg-gray-700' : 'bg-gray-800'}`}>
            <img src={isUserMessage ? user : bot} alt="Avatar" className="w-8 h-8 rounded-full mr-3 " />
            <div className="flex flex-col">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    isUserMessage: PropTypes.bool.isRequired,
};

export default Message;