import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="bg-dark3 py-[50px] relative">
      <ContentWrapper className="flex items-center flex-col">
        <ul className="flex items-center justify-center gap-[15px] mb-[20px] md:gap-[30px] md:mb-[30px]">
          <li className="transition-all ease-linear duration-500 cursor-pointer text-[12px] md:text-[16px] hover:text-pink">
            Terms Of Use
          </li>
          <li className="transition-all ease-linear duration-500 cursor-pointer text-[12px] md:text-[16px] hover:text-pink">
            Privacy-Policy
          </li>
          <li className="transition-all ease-linear duration-500 cursor-pointer text-[12px] md:text-[16px] hover:text-pink">
            About
          </li>
          <li className="transition-all ease-linear duration-500 cursor-pointer text-[12px] md:text-[16px] hover:text-pink">
            Blog
          </li>
          <li className="transition-all ease-linear duration-500 cursor-pointer text-[12px] md:text-[16px] hover:text-pink">
            FAQ
          </li>
        </ul>
        <div className="text-[12px] leading-[20px] opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <span className="w-[50px] h-[50px] rounded-[50%] bg-dark flex items-center justify-center cursor-pointer transition-all ease-linear duration-500 hover:[box-shadow:0_0_0.625em_pink] hover:text-pink">
            <FaFacebookF />
          </span>
          <span className="w-[50px] h-[50px] rounded-[50%] bg-dark flex items-center justify-center cursor-pointer transition-all ease-linear duration-500 hover:[box-shadow:0_0_0.625em_pink] hover:text-pink">
            <FaInstagram />
          </span>
          <span className="w-[50px] h-[50px] rounded-[50%] bg-dark flex items-center justify-center cursor-pointer transition-all ease-linear duration-500 hover:[box-shadow:0_0_0.625em_pink] hover:text-pink">
            <FaTwitter />
          </span>
          <span className="w-[50px] h-[50px] rounded-[50%] bg-dark flex items-center justify-center cursor-pointer transition-all ease-linear duration-500 hover:[box-shadow:0_0_0.625em_pink] hover:text-pink">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
