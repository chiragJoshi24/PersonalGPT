import Title from './Components/Title';
import MessageBoard from './Components/MessageBoard';
import TextBox from './Components/TextBox';
const Home = () => {
    return (
        <div className="h-screen bg-backgroundDark flex flex-col px-4 sm:px-32 w-full justify-center">
            <Title />
            <MessageBoard />
            <TextBox />
        </div>
    );
};

export default Home;
