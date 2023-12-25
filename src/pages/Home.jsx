import HomeImg from "../assets/images/HomeImg.png";
import HomePat from "../assets/images/HomePattern.png";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImg})`,
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={backgroundImageStyle}
      >
        <Navbar />
        <div className="flex justify-between mt-6">
          <div className="h-full flex flex-col w-[500px] ml-44 mt-16">
            <div className="text-[78px] text-[#5FCE55]">PrakritiAI</div>
            <div className="text-[60px]">
              Discover Harmony and Healing with{" "}
              <span className="text-[78px] text-[#5FCE55]">Ayurveda</span>
            </div>
          </div>
          <div className="flex mt-22 mr-20">
            <img
              src={HomePat}
              alt="HomePattern"
              className="h-[550px] w-[550px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
