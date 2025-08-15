import React, { useState, useEffect } from "react";
import { FaBars, FaXTwitter } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logo } from "../assets/images";
import {
  LiaFacebook,
  LiaInstagram,
  LiaTimesSolid,
  LiaYoutube,
} from "react-icons/lia";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isMobile = window.innerWidth < 768;

  // Change header background on scroll (example: after 80px)
  useEffect(() => {
    const handleScroll = () => {
      setHeaderBg(window.scrollY > 418);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const presence = () => setMenuOpen((prev) => !prev);
  const handleNavClick = () => setMenuOpen(false);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Classes", to: "/classes" },
    { name: "Services", to: "/services" },
    {
      name: "Pages",
      to: "",
      subLinks: [
        { name: "About Us", to: "/about" },
        { name: "Timetable", to: "/timetable" },
        { name: "BMI Calculator", to: "/bmi-calculator" },
        { name: "Gallery", to: "/gallery" },
      ],
    },
    { name: "Our Team", to: "/team" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        headerBg
          ? "bg-backdrop ease-in-out transition-all duration-500 h-12 md:h-16 items-center shadow-4xl"
          : "bg-transparent"
      } md:h-24 h-16 w-full font-gaegu flex items-end justify-between px-4 md:px-14 lg:px-24`}
    >
      <h1 id="logo" className="absolute left-2 top-2 z-50 md:static">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-28 p-3" />
        </Link>
      </h1>
      {/* Overlay for mobile menu */}
      <div
        id="overlay"
        className={`absolute md:hidden z-20 w-[100vw] h-[200vh] bg-secondary opacity-55 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={presence}
      ></div>
      <nav
        className={`relative w-full h-full flex items-end justify-end ${
          headerBg
            ? "bg-backdrop h-16 items-center transition-all duration-500 shadow-4xl"
            : "bg-transparent"
        }`}
      >
        {/* Hamburger Menu Icon */}
        <button
          className="text-xl rounded-md p-1 border-light border-2 md:hidden text-light absolute right-2 top-4"
          onClick={presence}
          aria-label="Toggle Menu"
        >
          {!menuOpen ? <FaBars /> : <FaBars />}
        </button>

        <div
          id="main-nav"
          className={`${
            menuOpen
              ? "flex -translate-x-4"
              : "-translate-x-96 md:translate-x-5"
          } flex-col md:flex md:flex-row items-center gap-4 font-semibold uppercase absolute md:static transition-transform duration-500 ease-in-out bg-light md:bg-inherit left-0 h-full w-3/5 md:w-auto md:h-auto z-50 top-16`}
        >
          {/* Close Menu Button (Mobile) */}
          <button
            className="text-xl border-secondary border-2 md:hidden rounded-md text-secondary absolute top-2 right-4 p-1"
            onClick={presence}
            aria-label="Close Menu"
          >
            {menuOpen ? <LiaTimesSolid /> : ""}
          </button>
          <div className="flex bg-light md:bg-inherit flex-col md:flex-row gap-6 md:gap-2 p-8 md:p-0 items-center justify-between w-full md:w-auto">
            {/* Search Icon & Bar */}
            {/* Mobile Search (only visible on mobile) */}
            <div className="flex flex-col gap-2 items-center md:hidden justify-between w-full">
              <button
                className="h-8 w-8 z-20 text-secondary hover:text-primary cursor-pointer text-xl font-thin"
                aria-label="Search"
                onClick={toggleSearch}
              >
                {isSearchOpen ? <LiaTimesSolid /> : <IoSearch />}
              </button>

              <div
                className={`transition-transform ease-in-out duration-500 overflow-hidden ${
                  isSearchOpen
                    ? "translate-y-0 opacity-100 shadow-md"
                    : "-translate-y-10 opacity-0"
                } w-full`}
              >
                <input
                  type="text"
                  className="w-full px-2 py-2 text-lg rounded-md placeholder:text-dark focus:outline-none shadow-md focus:ring-2 focus:ring-primary focus:rounded-md bg-white"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Desktop Search (only visible on md+ screens) */}
            <div className="hidden md:flex flex-row items-center gap-2 md:order-2 ">
              <div
                className={`transition-all ease-in-out duration-500 overflow-hidden ${
                  isSearchOpen
                    ? "translate-x-0 opacity-100 "
                    : "translate-x-10 opacity-0"
                } w-full`}
              >
                <input
                  type="text"
                  className="px-2 py-2 text-lg rounded-md placeholder:text-dark focus:outline-none shadow-md focus:ring-2 focus:ring-primary focus:rounded-md bg-white"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className="h-8 w-8 z-20 text-primary hover:text-primary cursor-pointer text-xl font-thin"
                aria-label="Search"
                onClick={toggleSearch}
                type="button"
              >
                {isSearchOpen ? <LiaTimesSolid /> : <IoSearch />}
              </button>
            </div>
            {/* Navigation Links */}
            <ul className="flex-1 flex bg-dark w-full p-4 md:p-0 flex-col md:flex-row md:order-1 md:bg-inherit mx-10 whitespace-nowrap items-start justify-center gap-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                const hasSubLinks = !!link.subLinks;
                const isDropdownOpen = openDropdown === link.name;

                return (
                  <li
                    key={link.to}
                    className="relative text-lg pl-7 group md:p-2"
                    onMouseEnter={() =>
                      !isMobile && hasSubLinks && setOpenDropdown(link.name)
                    }
                    onMouseLeave={() =>
                      !isMobile && hasSubLinks && setOpenDropdown(null)
                    }
                  >
                    <NavLink
                      to={link.to}
                      onClick={(e) => {
                        if (hasSubLinks) {
                          if (isMobile) {
                            e.preventDefault();
                            setOpenDropdown(isDropdownOpen ? null : link.name);
                          }
                        } else {
                          handleNavClick();
                          setOpenDropdown(null);
                        }
                      }}
                      className={`
  relative inline-block transition-colors duration-300
  ${
    isActive
      ? "text-primary font-bold after:absolute after:left-0 after:bottom-4 after:w-full after:h-[1.3px] after:bg-primary after:transition-all after:duration-500 after:-skew-y-[12deg] after:content-['']"
      : isMobile && link.name === "Pages" && isDropdownOpen
      ? "text-primary"
      : "text-light focus:text-light hover:text-primary"
  }
`}
                    >
                      <span
                        className={` font-extrabold text-lg md:text-xl uppercase
                          ${isActive ? " decoration-primary decoration-4" : ""}
                        `}
                      >
                        {link.name}
                      </span>
                      {isMobile && link.name === "Pages" && (
                        <span
                          className={`relative z-10 text-xs ml-1 transition-opacity duration-300 ${
                            isDropdownOpen ? "text-primary" : "text-light"
                          }`}
                        >
                          {isDropdownOpen ? "\u25BC" : "\u25B6"}
                        </span>
                      )}
                      {/* Animated underline on hover */}
                      {!isActive && (
                        <span
                          className={`absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full ${
                            isMobile && link.name === "Pages" && isDropdownOpen
                              ? "opacity-100"
                              : " opacity-0"
                          }`}
                          aria-hidden="true"
                        ></span>
                      )}
                      {/* Sub-links for "Pages" */}
                      {link.subLinks && (
                        <ul
                          className={`
              absolute left-0 mt-2 bg-secondary p-4 shadow-lg w-48 z-50 transition-opacity duration-300
              ${
                isMobile
                  ? isDropdownOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                  : "invisible group-hover:visible opacity-0 group-hover:opacity-100"
              }
            `}
                        >
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.to} className="text-sm">
                              <NavLink
                                to={subLink.to}
                                onClick={handleNavClick}
                                className={`inline-block relative py-2 ${
                                  location.pathname === subLink.to
                                    ? "text-primary font-bold after:absolute after:left-0 after:bottom-4 after:w-full after:h-[1.3px] after:bg-primary after:transition-all after:duration-500 after:-skew-y-[12deg] after:content-['']"
                                    : "text-white hover:text-primary"
                                }`}
                              >
                                {subLink.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            {/* Social Media Icons */}
            <ol className="flex items-center md:order-3 md:mr-5 justify-center gap-1">
              {[
                { icon: <LiaInstagram />, to: "/" },
                { icon: <LiaFacebook />, to: "/" },
                { icon: <LiaYoutube />, to: "/" },
                { icon: <FaXTwitter className="text-xl" />, to: "/" },
              ].map((link, idx) => (
                <li
                  key={idx}
                  className="text-secondary md:text-primary hover:text-primary text-2xl font-thin p-1 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link to={link.to}>{link.icon}</Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>
    </header>
  );
}
