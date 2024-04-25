import { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setActiveNav("#home");
      } else {
        setActiveNav("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Active Nav:", activeNav);

  return (
    <nav>
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
      >
        <BiBook />
      </Link>
      <Link
        to="services"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
      >
        <RiServiceLine />
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
