import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/moviebook-logo.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > 500) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed translate-y-0 w-full h-[60px] z-[2] flex items-center transition-all  duration-500 ${
        show === "top" &&
        `bg-[rgba(0,0,0,0.25)] backdrop-blur-[3.5px] [-webkit-backdrop-filter:blur(3.5px)]`
      } ${show === "show" && `bg-dark3`} ${
        show === "hide" && `translate-y-[-60px]`
      } ${mobileMenu && `bg-dark3 md:bg-[rgba(0,0,0,0.25)]`}`}
    >
      <ContentWrapper className="flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img className="h-[30px]" src={logo} alt="LOGO" />
        </div>
        <ul
          className={`  ${
            mobileMenu
              ? "flex absolute top-[60px] left-0 bg-dark3 flex-col w-[100%] py-[20px] border-t border-solid border-[rgba(255,255,255,0.1)]  md:bg-transparent md:static md:top-0 md:right-0 md:flex-row md:w md:block md:py-0 px-5 md:px-0 items-end md:border-none"
              : "hidden items-center static"
          } md:flex md:justify-end animate-[mobileMenu_0.5s_ease_forwards] z-[-5] md:z-0`}
        >
          <li
            className={`h-[60px] flex mx-[15px]  font-[500] relative cursor-pointer hover:text-pink ${
              mobileMenu
                ? "text-[20px] w-full h-auto py-[15px] px-[20px] flex flex-col items-start md:items-end md:w-auto"
                : "items-center mx-[15px] "
            }`}
            onClick={() => navigationHandler("movie")}
          >
            Movies
          </li>
          <li
            className={`h-[60px] flex mx-[15px] font-[500] relative cursor-pointer hover:text-pink ${
              mobileMenu
                ? "text-[20px] w-full h-auto py-[15px] px-[20px] flex flex-col items-start md:items-end md:w-auto"
                : "items-center mx-[15px]"
            }`}
            onClick={() => navigationHandler("tv")}
          >
            TV Shows
          </li>
          <li
            className={`h-[60px] items-center mx-[15px] font-[500] relative mr-0 cursor-pointer hover:text-pink hidden md:flex`}
          >
            <HiOutlineSearch
              className="text-[18px]  cursor-pointer"
              onClick={openSearch}
            />
          </li>
        </ul>
        <div className="flex items-center gap-[20px] md:hidden ">
          <HiOutlineSearch
            className="text-[18px] text-white  cursor-pointer"
            onClick={openSearch}
          />
          {mobileMenu ? (
            <VscChromeClose
              className="text-[18px] text-white"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <SlMenu
              className="text-[18px] text-white"
              onClick={openMobileMenu}
            />
          )}
        </div>
      </ContentWrapper>
      <div
        className={`${
          showSearch ? "" : "hidden top-0"
        } w-full h-[60px] bg-white absolute top-[60px] animate-[mobileMenu_0.5s_ease_forwards] z-[-5]`}
      >
        <ContentWrapper>
          <div className="flex items-center h-[40px] mt-[10px] w-full">
            <input
              className="w-full h-[50px] bg-white outline-none border-none rounded-[30px_0_0_30px] text-black px-[15px] text-[14px] md:h-[60px] md:text-[20px] md:px-[30px]"
              type="text"
              placeholder="Search any movie of tv show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <VscChromeClose
              className="text-[20px] flex-shrink-0 ml-[10px] text-black cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          </div>
        </ContentWrapper>
      </div>
    </header>
  );
};

export default Header;
