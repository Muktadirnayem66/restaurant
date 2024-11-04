import PropTypes from "prop-types";

const CommonHeading = ({label}) => {
    return (
        <div className='flex items-center gap-[10px]'>
            <span className="w-[10px] h-[10px] bg-[#BD1F17]"></span>
            <p className="text-[#BD1F17] text-[16px] sm:text-[20px] font-roboto">{label}</p>
            </div>
    );
};

CommonHeading.propTypes = {
    label:PropTypes.string.isRequired
}

export default CommonHeading;