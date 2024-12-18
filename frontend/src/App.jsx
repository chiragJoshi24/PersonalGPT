import React, { useState } from 'react';
import Title from './Components/Title';
import MessageBoard from './Components/MessageBoard';
import TextBox from './Components/TextBox';
const App = () => {
    const [darkMode, setMode] = useState(true);
    return (
        <div
            className={`h-screen ${darkMode ? 'bg-backgroundDark' : 'bg-backgroundLight'} flex flex-col px-4 sm:px-32 w-full justify-center`}
        >
            <Title darkMode={darkMode} setMode={setMode} />
            <MessageBoard />
            <TextBox />
        </div>
    );
};

export default App;
