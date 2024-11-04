import Button from "./UI/Button";
import TodayOffer from '../assets/today-offer.png'
import HeroImage from '../assets/hero-image.png'
import vectorImage from '../assets/Vector.png'

const Hero = () => {
    return (
        <div className="w-[390px] h-[715px] sm:w-[1373px] sm:h-[649px] sm:mx-auto gap-[8px] sm:gap-[48px] flex flex-col sm:flex sm:flex-row">
            <div className="w-[330px] h-[292px] flex flex-col items-start gap-[32px] sm:gap-[38px] px-[30px] py-[2px]  sm:py-[234px] sm:w-[946px] sm:h-[446px]">
                <div className=" w-[330px] h-[112px] sm:w-[945px] sm:h-[252px] text-center sm:bg-red-gradient sm:relative  sm:z-30">
                <p className="text-white font-bebas text-[48px] sm:text-[120px] leading-[56px] sm:leading-[130px] text-left sm:tracking-wide ">Taste the authentic
                     Saudi cuisine</p>
                </div>
                <div className=" w-[330px]  h-[84px] sm:w-[559px] sm:h-[64px]">
                <p className="text-white font-roboto leading-[28px] sm:leading-[32px] text-[20px] sm:text-[24px] font-normal">Among the best Saudi chefs in the world, serving you something beyond flavor</p>
                </div>
                <div >
                <Button label="EXPLORE MENU"  />
                </div>
            </div>
            <div className="flex flex-col items-end h-[311px] sm:w-[751px] sm:h-[649px] px-[27px] py-[37px] sm:py-[130px]">
                <div className="absolute sm:z-20 sm:mt-[-30px] mt-[-16px] sm:mr-[-28px]">
                    <img src={vectorImage} className="w-[45px] h-[45px]" alt="vector_thumbnail" />
                </div>
                <div className=" relative sm:absolute z-30 sm:z-0 ">
                    <img src={HeroImage} className="w-[330px] sm:w-[700px] h-[310px] sm:h-[649px]" alt="hero_thumbnail" />
                </div>
                <div className=" absolute z-50 sm:absolute w-[63px]  h-[63px] sm:w-[120px] sm:[120px] sm:z-30 mt-[244px] sm:mt-[544px] mr-3 sm:mr-[-60px]">
                    <img src={TodayOffer} alt="offer_thumnail"/>
                </div>

            </div>
            
        </div>
    );
};

export default Hero;