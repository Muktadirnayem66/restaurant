import RightArrow from "../../assets/arrow-right.svg";
import LeftArrow from "../../assets/arrow-left.svg";
import CommonHeading from "../UI/CommonHeading";
import SideImage1 from "../../assets/customerSlide1.png";
import VideoImage from "../../assets/Video.png";
import QuteImage from "../../assets/qute.svg";
import UserImage from "../../assets/user.png";
import sideStar from "../../assets/star.svg";
import leafImage from '/assets/leaf.png'


const CustomerReview = () => {
  return (
    <div className=" w-[390px] h-[532px] sm:w-[1920px] sm:h-[710px] sm:px-[300px] sm:py-[120px] ">
      <div className=" hidden sm:block absolute ml-[-300px] mt-[140px]">
        <img src={SideImage1} alt="side_image" />
      </div>
      <div className="hidden sm:block sm:ml-[1220px] sm:mr-[-20px]  sm:mt-[200px] z-0 absolute ">
              <img src={leafImage} alt="leaf_image" />
            </div>

      <div className="w-[330px] h-[468px] mx-auto py-[16px] sm:w-[1320px] sm:h-[110px]">
        {/* item heading */}
        <CommonHeading label="Crispy, Every Bite Taste" />

        {/* carosel */}
        <div className="sm:flex justify-between sm:mb-[60px] ">
          <p className="font-bebas text-[40px] sm:text-[70px] text-[#181818]">
            What Some of my Customers Say
          </p>
          <div className="sm:flex hidden">
            <img src={LeftArrow} alt="left_arrow" />
            <img src={RightArrow} alt="right_arrow" />
          </div>
        </div>

        <div className="sm:flex-row sm:flex flex flex-col-reverse ">
          {/* review in restaurant */}
          <div className=" bg-[#FEBF00] w-[330px] h-[335px] sm:w-[555px] sm:h-[555px] ">
            <div className=" mt-[288px] sm:mt-[420px] absolute  ">
              <img src={sideStar} className="  w-[24px] h-[49px] sm:w-[39px] sm:h-[76px]"  alt="leaf_image" />
            </div>
            
            <div className=" mt-10 sm:mt-[80px] w-[280px] h-[285px] sm:w-[386px] flex flex-col gap-[40px] sm:gap-[164px]  sm:h-[411px] mx-auto">
              <div className="flex items-start">
                <img src={QuteImage} className="sm:w-[28px] sm:h-[29px] w-[30px] " alt="qute_image" />
                <p className=" text-[#0A1425] font-roboto font-normal text-[18px] sm:text-[20px] leading-[28px] sm:leading-[34px]">
                  You can&apos;t go wrong with Chicken Mandi, I had it twice.
                  The chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it
                </p>
              </div>
              <div className="sm:w-[359px] sm:mx-auto">
                <div className="flex justify-between">
                  <div>
                    <p className="sm:text-[18px] font-bebas ">
                      Khalid Al Dawsry
                    </p>
                    <p className="text-[14px] font-normal font-roboto text-[#333333]">
                      Jeddah, Saudi
                    </p>
                  </div>
                  <div >
                    <img src={UserImage} className="w-[39px] h-[39px]"  alt="use_image" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-end mt-[7px] ">
                    <p className=" w-[33px] sm:w-[60px] h-[3px] sm:h-[5px] bg-[#BD1F17]"></p>
                    <p className="w-[283px] sm:w-[360px] h-[1px] sm:h-[2px] bg-[#0A1425]"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* video image */}
          <div className="z-30">
            <img
              src={VideoImage}
              className=" w-[330px] h-[240px] sm:w-[763px] sm:h-[555px]"
              alt="video_image"
            />
          </div>
        </div>

        <div className="flex sm:hidden gap-[5px] w-[40px] h-[40px] mx-[110px]">
          <img src={LeftArrow} alt="left_arrow" />
          <img src={RightArrow} alt="right_arrow" />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
