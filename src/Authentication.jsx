import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import app from './Firebase/firebaseConfig';
import logo from '/logo.svg';

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        const auth = getAuth(app);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Sign-up successful!');
            navigate('/home');
        } catch (error) {
            alert('Sign-up failed: ' + error.message);
        }
    };

    const handleAuthentication = async () => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            navigate('/home');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    return (
        <div className="h-screen bg-backgroundDark flex flex-col justify-center items-center">
            <div className="flex items-center gap-5 mb-5 flex-col">
                <img src={logo} alt="Logo" className="h-12" />
                <div className="text-[#F87171] font-bold text-3xl">
                    Welcome to PersonalGPT
                </div>
            </div>
            <div className="border-black h-96 border-solid border-[1px] w-96 gap-4 rounded-xl flex flex-col items-center justify-center bg-backgroundLight text-black">
                <h1 className="text-3xl font-extrabold text-black">
                    Sign In / Sign Up
                </h1>
                <input
                    type="text"
                    placeholder="Email"
                    className="h-8 pl-3 rounded-lg text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="h-8 pl-3 rounded-lg text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleAuthentication}
                    className="border-solid border-2 border-black w-[228px] py-2 px-4 rounded-xl font-bold text-center text-black hover:scale-[1.03] transition-all"
                >
                    Log In
                </button>
                <button
                    onClick={handleSignUp}
                    className="border-solid border-2 border-black w-[228px] py-2 px-4 rounded-xl font-bold text-center text-black hover:scale-[1.03] transition-all"
                >
                    Sign Up
                </button>
                Email Verification is not required.
            </div>
        </div>
    );
};

export default Authentication;
