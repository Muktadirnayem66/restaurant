import PropTypes from "prop-types";

const FooterInfo = ({ infoImage, title, info1, info2 }) => {
  return (
    <div className="flex flex-col w-[330px] h-[136px] gap-[16px]">
      <div className=" flex flex-col sm:gap-4 items-center">
        <img src={infoImage} className="w-[30px] h-[30px]" alt="clock_svg" />
        <p className="text-[24px] font-bebas pt-4 sm:pt-0">{title}</p>
      </div>
      <div className="text-[16px] font-roboto">
        <p>{info1}</p>
        <p>{info2}</p>
      </div>
    </div>
  );
};

FooterInfo.propTypes = {
  infoImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info1: PropTypes.string.isRequired,
  info2: PropTypes.string.isRequired,
};

export default FooterInfo;
