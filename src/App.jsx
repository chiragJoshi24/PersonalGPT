import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Authentication from './Authentication';
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        // <Home />
    );
};

export default App;
