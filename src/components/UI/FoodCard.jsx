import PropTypes from "prop-types";

const FoodCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#FFFFFF] p-[32px] flex flex-col gap-[15px] items-center">
      <img src={image} className="w-[186px] h-[124px]" alt="food_item" />
      <span className="w-[57px] h-[4px] bg-[#BD1F17]"></span>
      <p className="text-[24px] font-bebas">{title}</p>
      <p className="text-[16px] font-normal">{description}</p>
    </div>
  );
};

FoodCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FoodCard;
