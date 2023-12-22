import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/favicon.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-screen-xl mx-auto px-3 py-8">
        <div className="footer py-10 text-white hidden lg:flex justify-between">
          <nav>
            <header className="footer-title">Services</header>
            <Link className="link link-hover flex gap-1 items-center">
              <FaArrowAltCircleRight /> Branding
            </Link>
            <Link className="link link-hover flex gap-1 items-center">
              <FaArrowAltCircleRight />
              Design
            </Link>
            <Link className="link link-hover flex gap-1 items-center">
              <FaArrowAltCircleRight />
              Marketing
            </Link>
            <Link className="link link-hover flex gap-1 items-center">
              <FaArrowAltCircleRight />
              Advertisement
            </Link>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link
              to="/about"
              className="link link-hover flex gap-1 items-center"
            >
              <FaArrowAltCircleRight />
              About Us
            </Link>
            <Link
              to="/contact"
              className="link link-hover flex gap-1 items-center"
            >
              <FaArrowAltCircleRight />
              Contact Us
            </Link>
            <Link
              to="/whyus"
              className="link link-hover flex gap-1 items-center"
            >
              <FaArrowAltCircleRight />
              Why Us
            </Link>
          </nav>
          <nav>
            <header className="footer-title">Data Usages</header>
            <Link className="link link-hover flex gap-1 items-center">
              <FaArrowAltCircleRight />
              Terms of use
            </Link>
            <Link className="link link-hover flex gap-1 items-center">
              <FaArrowAltCircleRight />
              Privacy policy
            </Link>
            <Link className="link link-hover flex gap-1 items-center">
              <FaArrowAltCircleRight />
              Cookie policy
            </Link>
          </nav>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 pt-10 lg:border-t bg-slate-900 text-white lg:border-base-300">
          <aside className="items-center flex gap-2">
            <img className="w-10 hidden lg:block" src={Logo} alt="" />
            <div className="flex lg:block gap-1">
              <p>Copyright Tasker&trade; 2023</p>
              <p>All right reserved.</p>
            </div>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <p className="mb-2 text-center lg:text-left">Find us on</p>
            <ul className="grid grid-flow-col gap-4 text-xl">
              <Link
                to="https://facebook.com/itzmonir"
                className="hover:text-primary duration-300"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://youtube.com"
                className="hover:text-primary duration-300"
              >
                <FaYoutube />
              </Link>
              <Link
                to="https://github.com/rocktohq"
                className="hover:text-primary duration-300"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://instagram.com/itzmonir"
                className="hover:text-primary duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://twitter.com/itzmonir"
                className="hover:text-primary duration-300"
              >
                <FaTwitter />
              </Link>
            </ul>
          </nav>
          <nav className="grid grid-flow-col gap-4 lg:hidden">
            <Link to="/about">About</Link>
            <Link to="/whyus">Why Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="">Career</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
