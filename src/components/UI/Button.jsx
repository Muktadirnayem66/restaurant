
import PropTypes from "prop-types";


const Button = ({label}) => {
    return (
        <button className={`text-black uppercase sm:px-[24px] py-[13px] px-[20px] sm:py-[16px] font-roboto font-bold bg-buttons`}>
            {label}
        </button>
    );
};


Button.propTypes = {
    label : PropTypes.string.isRequired,
}

export default Button;