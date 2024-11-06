import ClockImage from "../../assets/clock.svg";
import CallImage from "../../assets/call-alt.svg";
import MailImage from "../../assets/mail.svg";
import MapImage from "../../assets/map-pin.svg";

import facebookImage from '../../assets/Frame.svg'
import twitterImage from '../../assets/Frame1.svg'
import instagramImage from '../../assets/Frame2.svg'
import linkdinImage from '../../assets/Frame3.svg'

import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <div className="mt-80 w-[390px] h-[999px] sm:w-[1920px] sm:h-[720px] relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-footerImage bg-cover bg-center"></div>

      {/* Overlay with Opacity */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-white sm:px-[300px] py-[30px] sm:py-[100px] w-full">
        <div>
          <div className=" flex flex-col gap-[50px] sm:gap-[80px] w-[330px] sm:w-[1320px] mx-auto h-[929px] sm:h-[480px]">
          <p className="font-bebas text-[40px] sm:text-[62px] text-center">
            We’re ready to offer you the best dining experiences
          </p>
          <div className="flex flex-col gap-[16px] sm:flex sm:flex-row sm:justify-between align-middle text-center">
            <FooterInfo
              infoImage={ClockImage}
              title="Opening hours"
              info1="Monday - Sunday"
              info2="9:00 AM to 11:30 PM"
            />
            <FooterInfo
              infoImage={CallImage}
              title="LET'S TALK"
              info1="Phone: 1-800-222-4545"
              info2="Fax: 1-800-222-4545"
            />
            <FooterInfo
              infoImage={MailImage}
              title="BOOK A TABLE"
              info1="Email: demo@website.com"
              info2="Support: support@website.com"
            />
            <FooterInfo
              infoImage={MapImage}
              title="Our Address"
              info1="123 Stree New York City , United"
              info2="States Of America."
            />
          </div>
          <div className="w-[293px] h-[71px] sm:w-[390px] sm:h-[104px] flex flex-col gap-[10px] sm:gap-[25px] items-center mx-auto">
            <div className="flex gap-[16px] sm:gap-[24px] items-center">
                <img src={facebookImage} className="sm:w-[53px] w-[36px]" alt="facebook_image" />
                <img src={twitterImage} className="sm:w-[53px] w-[36px]" alt="facebook_image" />
                <img src={instagramImage} className="sm:w-[53px] w-[36px]" alt="facebook_image" />
                <img src={linkdinImage} className="sm:w-[53px] w-[36px]" alt="facebook_image" />
            </div>
            <p className="text-[16px] sm:text-[21px] text-center font-montserrat">© 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights Reserved</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
