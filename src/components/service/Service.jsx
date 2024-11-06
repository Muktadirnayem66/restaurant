import Package from "../../assets/package.png";
import Achive from "../../assets/achive.png";
import BuyImage from "../../assets/buy.png";
import PromotionImage from "../../assets/promotion-image.png";
import Button from "../UI/Button";
import CallIcon from "../../assets/call-icon.png";
import SideImage from '/assets/sideImage-1.png'

const Service = () => {
  return (
    <div className=" sm:px-[300px] sm:py-[120px] px-[30px] py-[32px] sm:w-[1920px] sm:h-[864px]
     w-[390px] h-[1144px]">
      <div className="sm:flex-row  sm:gap-[74px] sm:flex">
        <div className="w-[330px] h-[246px] sm:w-[617px] sm:h-[460px]">
          <img src={PromotionImage} alt="promotion_image" />
        </div>
        {/* restaurant overview */}

        <div className="w-[330px] h-[478px] sm:w-[624px] sm:h-[402px] flex flex-col py-[26px] gap-[18px] sm:relative">
          <div className="flex capitalize gap-[12px] sm:gap-[16px] text-[14px] items-center font-medium border-[#B52B1D] border-b-[2px]">
           
            <p className="bg-[#B52B1D] text-white px-[26px] py-[6px]">About</p>
            <p>Experience</p>
            <p>Contact</p>
            
          </div>
          <div>
            <p className=" uppercase font-bebas sm:font-bold leading-[48px] sm:leading-[62px] text-[40px] sm:text-[62px]">
              Exceptional culinary experience and delicious food
            </p>
          </div>
          <div>
            <p className="font-roboto font-normal text-[16px] leading-[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
          </div>
          <div className="flex items-center gap-[18px]">
            <Button label="about more"  />
            <div className="flex sm:py-[16px] sm:px-[24px] font-roboto text-[16px] sm:text-[18px] font-bold">
              <img src={CallIcon} className=" w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" alt="call_icon" />
              <p>+88 3426 739 485</p>
            </div>
          </div>
        </div>
        
        {/* side image */}
        <div className=" hidden sm:block absolute sm:ml-[1300px] sm:mr-[-18px] sm:mt-[230px]">
            <img src={SideImage} className="w-[363px] h-[340px]" alt="side_image1" />
        </div>
      </div>

      {/* symbol */}
      <div className="flex-col items-start sm:flex-row sm:flex justify-between mt-8 ">
        <div className="flex">
          <div>
            <img src={Package} alt="package_image" />
          </div>
          <div className="flex flex-col justify-center text-[#0A1425]">
            <p className=" uppercase font-bebas text-[30px] leading-[36px]">
              fast delivery
            </p>
            <p className="">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={Achive} alt="Achive_image" />
          </div>
          <div className="flex flex-col justify-center text-[#0A1425]">
            <p className=" uppercase font-bebas  text-[30px] leading-[36px]">
              absolute dining
            </p>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={BuyImage} alt="buy_image" />
          </div>
          <div className="flex flex-col justify-center text-[#0A1425]">
            <p className=" uppercase font-bebas text-[30px] leading-[36px]">
              pickup delivery
            </p>
            <p>Grab your food order</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
