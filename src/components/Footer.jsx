import FooterBkg from "../assets/images/FooterBkg.png";
import { CiLocationOn } from "react-icons/ci";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${FooterBkg})`,
  };
  return (
    <div className="bg-[#98e085] flex flex-row justify-center w-full" style={footerStyle}>
      <div className="bg-[#98e085] w-[1440px] h-[337px]" style={footerStyle}>
        <div className="relative h-[337px]">
          <p className="absolute w-[311px] top-[82px] left-[60px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#353535] text-[16px] tracking-[0] leading-[normal]">
            LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. PLACEAT,
            SUSCIPIT EUM? VOLUPTATEM ASSUMENDA LOREM IPSUM, DOLOR SIT AMET
            CONSECTETUR ADIPISICING ELIT. PLACEAT, SUSCIPIT EUM? VOLUPTATEM
            ASSUMENDA LOREM IPSUM
          </p>
          <div className="absolute w-[366px] top-[41px] left-[60px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[24.0px] underline whitespace-nowrap">
            PrakritiAI
          </div>
          <div className="absolute w-[62px] top-[41px] left-[551px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] underline whitespace-nowrap">
            LINKS
          </div>
          <div className="absolute w-[68px] h-[21px] top-[80px] left-[553px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            HOME
          </div>
          <div className="absolute w-[112px] h-[21px] top-[115px] left-[553px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            ABOUT US
          </div>
          <div className="absolute w-[112px] h-[21px] top-[150px] left-[553px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            SERVICES
          </div>
          <div className="absolute w-[112px] h-[21px] top-[185px] left-[553px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            BLOG
          </div>
          <div className="absolute w-[139px] h-[21px] top-[220px] left-[551px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            CONTACT US
          </div>
          <div className="absolute w-[132px] h-[41px] top-[32px] left-[760px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] underline">
            CONTACT US AT
          </div>
          
          <div className="absolute w-[71px] h-[26px] top-[92px] left-[785px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
          <IconContext.Provider value={{size:"1.5rem"}}><CiLocationOn />ADDRES</IconContext.Provider>
          </div>
          <div className="absolute w-[51px] h-[19px] top-[193px] left-[795px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
          <IconContext.Provider value={{size:"1.5rem"}}><AiOutlineMail /></IconContext.Provider>EMAIL
          </div>
          <div className="absolute w-[92px] h-[19px] top-[223px] left-[795px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
          <IconContext.Provider value={{size:"1.5rem"}}><SlPhone /></IconContext.Provider>PHONE NO.
          </div>
          <div className="absolute w-[519px] top-[284px] left-[460px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            Copy right @ PrakritiAI
          </div>
          <p className="absolute w-[248px] h-[145px] top-[95px] left-[1088px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[normal]">
            UNLOCKING NATURE&#39;S HEALING SECRETS: WELCOME TO OUR AYURVEDIC
            HEALING HAVEN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
