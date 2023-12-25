import ContactImg1 from "../assets/images/ContactImg1.png";
import Logo from "../assets/images/Logo.png";
const Contact = () => {
  return (
    <div className="bg-[#98e085] flex flex-row justify-center w-full">
      <div className="bg-[#98e085] w-[1440px] h-[1024px]">
        <div className="relative h-[1020px] top-[4px] bg-cover bg-[50%_50%]">
          <div className="absolute w-[611px] h-[82px] top-[292px] left-[674px] bg-[#59b940] rounded-[30px]">
            <div className="absolute w-[120px] h-[33px] top-[23px] left-[34px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#e0e0e0] text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
              NAME
            </div>
          </div>
          <div className="absolute w-[611px] h-[82px] top-[412px] left-[674px] bg-[#59b940] rounded-[30px]">
            <div className="absolute w-[126px] h-[32px] top-[22px] left-[34px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#e0e0e0] text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
              EMAIL
            </div>
          </div>
          <div className="absolute w-[611px] h-[245px] top-[530px] left-[674px] bg-[#59b940] rounded-[30px]">
            <div className="absolute w-[316px] h-[33px] top-[22px] left-[34px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#e0e0e0] text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
              YOUR THOUGHT
            </div>
          </div>
          <div className="absolute w-[611px] top-[90px] left-[674px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[96px] leading-[115.2px] underline tracking-[0] whitespace-nowrap">
            Contact Us
          </div>
          <div className="flex w-[367px] h-[78px] items-center justify-center gap-[10px] px-[120px] py-[24px] absolute top-[833px] left-[795px] bg-[#3c3a78] rounded-[48px] shadow-[7px_14px_17px_#00000040]">
            <button
              className="relative w-fit mt-[-0.50px] ml-[-3.50px] mr-[-3.50px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[24px] leading-[28.8px] tracking-[0] whitespace-nowrap"
              type="submit"
            >
              Contact Us
            </button>
          </div>
          <div className="absolute w-[531px] h-[866px] top-[85px] left-[84px]">
            <img
              className="absolute w-[531px] h-[815px] top-[51px] left-0 object-cover"
              alt="Unsplash"
              src={ContactImg1}
            />
            <img
              className="absolute w-[223px] h-[217px] top-0 left-[143px]"
              alt="Logo"
              src={Logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
