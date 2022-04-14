import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "./footer.css";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container footer ">
        <div className="row ">
          <div className="col-md-6 offset-md-3 ">
            <div className="row footerIcons">
              <div className="col-2 ">
                <Tippy
                  content={
                    <span style={{ color: "#FFCC00" }}>
                      Twitter - Harpreet kaur
                    </span>
                  }
                >
                  <a
                    href="https://in.linkedin.com/in/harpreet-kaur-167b35169s"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </Tippy>
              </div>
              <div className="col-2">
                <Tippy
                  content={
                    <span style={{ color: "#FFCC00" }}>
                      instagram - priyabangarh
                    </span>
                  }
                >
                  <a
                    href="https://www.instagram.com/priyabangarh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagramSquare />
                  </a>
                </Tippy>
              </div>
              <div className="col-2">
                <Tippy
                  content={
                    <span style={{ color: "#FFCC00" }}>
                      Linkedin - Harpreet kaur
                    </span>
                  }
                >
                  <a
                    href="https://in.linkedin.com/in/harpreet-kaur-167b35169"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </Tippy>
              </div>
              <div className="col-2">
                <Tippy
                  content={
                    <span style={{ color: "#FFCC00" }}>
                      Phone-Number - 9876543210
                    </span>
                  }
                >
                  <a
                    href="https://in.linkedin.com/in/harpreet-kaur-167b35169"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaPhoneAlt />
                  </a>
                </Tippy>
              </div>
              <div className="col-2">
                <Tippy
                  content={
                    <span style={{ color: "#FFCC00" }}>
                      Gmail - priyabangarh84@gmail.com
                    </span>
                  }
                >
                  <a
                    href="mailto:priyabangarh84@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaEnvelope />
                  </a>
                </Tippy>
              </div>
              <div className="col-2">
                <Tippy
                  content={
                    <span style={{ color: "#FFCC00" }}>
                      Twitter - Harpreet kaur
                    </span>
                  }
                >
                  <a
                    href="https://in.linkedin.com/in/harpreet-kaur-167b35169s"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </Tippy>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
