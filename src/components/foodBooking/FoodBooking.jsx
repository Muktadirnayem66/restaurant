import Button from "../UI/Button";
import CommonHeading from "../UI/CommonHeading";
import { FaCalendarAlt } from "react-icons/fa";
import upDownImage from "../../assets/updown.png";

const FoodBooking = () => {
  return (
    <div className="w-[390px] h-[762px] sm:w-[1920px] sm:h-[788px] bg-formImage bg-cover ">
      <div className=" sm:w-[1320px] sm:-[548px]">
        <div className=" sm:flex sm:flex-col sm:gap-[40px] w-[330px] h-[662px] mx-auto sm:w-[635px] sm:h-[548px] py-8 sm:py-20">
          <div className="sm:w-[635px] sm:h-[174px]">
            <CommonHeading label="Book Now" />
            <p className="text-white text-[40px] sm:text-[62px] font-bebas">
              BOOK YOUR TABLE
            </p>
            <div className="sm:w-[545px]">
              <p className="text-white font-roboto font-normal leading-[24px] text-[16px]">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus
              </p>
            </div>
          </div>
          <form className="sm:flex flex-col py-[30px] sm:py-0 sm:gap-[24px]">
            <div className="flex flex-col sm:flex-none sm:gap-[24px] ">
            <div className="flex-col justify-between sm:flex sm:flex-row">
              
              <input
                type="text"
                className="bg-transparent border  rounded-sm text-white  w-[330px] sm:w-[302px] h-[46px] py-[16px] px-[12px] placeholder:text-white"
                placeholder="Your Name *"
              />
              
              <div className="py-[24px] sm:py-0">
              <input
                type="email"
                className="text-white bg-transparent border rounded-sm w-[330px] sm:w-[302px] h-[46px] py-[16px] px-[12px] placeholder:text-white"
                placeholder="Your Email"
              />
              </div>
             
            </div>
            <div className="sm:flex flex-col  sm:flex-row sm:gap-[30px]">
              <div className="relative w-[330px]">
                <input
                  placeholder="Reservation Date"
                  type="text"
                  className="w-full h-[46px] py-[16px] px-[12px] pr-[40px] bg-transparent text-white border border-white rounded-sm placeholder:text-white focus:outline-none"
                />
                <FaCalendarAlt className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none cursor-pointer" />
              </div>

              <div className="relative w-[330px] py-[24px] sm:py-0">
                <input
                  type="text"
                  placeholder="Total People"
                  className="w-full h-[46px] py-[16px] px-[12px] pr-[40px] bg-transparent text-white border border-white rounded-sm placeholder:text-white focus:outline-none"
                  readOnly
                />
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none cursor-pointer">
                  <img src={upDownImage} alt="up_downImage" />
                </div>
              </div>
            </div>
            <textarea
            
              placeholder="Message"
              className=" text-white bg-transparent placeholder:text-white border px-[16px] py-[12px] rounded-sm w-full h-[140px]"
            />
            </div>
          </form>
          <div>
            <Button label="BOOK NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBooking;
