import React from 'react';
import logo from '/logo.svg';

const Title = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-12" />
                <div className="text-[#F87171] font-bold text-3xl">PersonalGPT</div>
            </div>
            <div className="flex items-center gap-2 lg:gap-10">
                <a
                    href="https://github.com/chiragJoshi24/PersonalGPT"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github text-3xl"></i>
                </a>
                <a href="#">
                    <i className="fa fa-cog text-3xl"></i>
                </a>
            </div>
        </div>
    );
};

export default Title;
