import logo from '/logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Buttons from './Components/Buttons';
import Home from './Home';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="h-screen bg-backgroundDark flex flex-col justify-center items-center">
                            <div className="flex items-center gap-5 mb-5 flex-col">
                                <img src={logo} alt="Logo" className="h-12" />
                                <div className="text-[#F87171] font-bold text-3xl">
                                    Welcome to PersonalGPT
                                </div>
                            </div>
                            <div className="border-black h-[36rem] border-solid border-[1px] w-96 gap-4 rounded-xl flex flex-col items-center justify-center bg-backgroundLight">
                                <h1 className="text-3xl font-extrabold text-black">
                                    Sign In
                                </h1>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="h-8 pl-3 rounded-lg text-black"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="h-8 pl-3 rounded-lg text-black"
                                />
                                <Buttons title="Log In"></Buttons>
                                <div className="flex items-center w-[80%]">
                                    <div className="flex-grow border-t border-black"></div>
                                    <span className="px-2 text-black">or</span>
                                    <div className="flex-grow border-t border-black"></div>
                                </div>
                                <Buttons title="Sign In with Google"></Buttons>
                                <Buttons title="Sign Up with Google"></Buttons>
                                <Buttons title="Sign Up with Email"></Buttons>
                                <Link
                                    to="/home"
                                    className="text-black hover:underline"
                                >
                                    Continue as a guest
                                </Link>
                            </div>
                        </div>
                    }
                />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
        // <Home />
    );
};

export default App;
