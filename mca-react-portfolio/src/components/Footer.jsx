
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
         
      
        </div>
        <p className="text-sm text-center">
          © Rani Rangari - 2022 | MCA : Portfolio 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
