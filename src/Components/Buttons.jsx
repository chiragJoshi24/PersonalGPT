import PropTypes from 'prop-types';

const Buttons = ({ title }) => {
    return (
        <a
            href="#"
            className="border-solid border-2 border-black w-[228px] py-2 px-4 rounded-xl font-bold text-center text-black hover:scale-[1.03] transition-all"
        >
            {title}
        </a>
    );
};

Buttons.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Buttons;
