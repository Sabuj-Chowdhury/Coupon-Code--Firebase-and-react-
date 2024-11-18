import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-4xl">
          <a href="https://github.com/Sabuj-Chowdhury" target="_blank">
            <FaSquareGithub />
          </a>
          <a href="https://www.facebook.com/sc2706r/" target="_blank">
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/sabuj-chowdhury-8524a1b4/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Sabuj
          Chowdhury
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
