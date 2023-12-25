import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const liStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "20px",
  };

  return (
    <>
      <div className="flex justify-between w-[1274px] h-[138px] p-10 ml-auto mr-auto">
        <Link to="/">
          <img className="w-[191px] h-[138px]" src={Logo} />
        </Link>
        <ul className="flex mt-auto">
          <Link to="/">
            <li className="mr-14" style={liStyle}>
              HOME
            </li>
          </Link>
          <Link to="/chatbot">
            <li className="mr-14" style={liStyle}>
              CHATBOT
            </li>
          </Link>
          <Link to="/services">
            <li className="mr-14" style={liStyle}>
              SERVICES
            </li>
          </Link>
          <Link to="/contact">
            <li className="mr-14" style={liStyle}>
              CONTACT
            </li>
          </Link>
          <Link to="/about">
            <li className="mr-14" style={liStyle}>
              ABOUT
            </li>
          </Link>
          <Link to="/login">
            <li className="bg-[#98E085] rounded-[20px]" style={liStyle}>
              LOGIN
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
