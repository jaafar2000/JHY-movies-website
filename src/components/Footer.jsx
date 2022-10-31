import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="footer_section">
      <div className="overlay"></div>
      <div className="info">
        <div className="links">
          <p className="footer-title">Links</p>
          <Link className="link-footer" to="/home">
            home
          </Link>
          <Link className="link-footer" to="/movie">
            movie
          </Link>
          <Link className="link-footer" to="/tv">
            tv
          </Link>
          <Link className="link-footer" to="/search">
            search
          </Link>
        </div>
        <div className="contact">
          <p className="footer-title">Contact</p>
          <p>
            {" "}
            <span>
              <LocalPhoneIcon sx={{ fontSize: 20 }} />
            </span>{" "}
            +91 9123367115
          </p>
          <p>
            {" "}
            <span>
              <EmailIcon sx={{ fontSize: 20 }} />
            </span>{" "}
            jaafaryoussef13579@gmail.com
          </p>
        </div>
        <div className="last">
          <p className="logo">
            JHY
            <PlayCircleIcon sx={{ fontSize: 40, color: "red" }} />
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jaafar-youssef-923100249/"
          >
            <LinkedInIcon /> linkedin
          </a>
          <a target="_blank" href="https://github.com/jaafar2000">
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
      <p className="copyright">Copyright © 2022 jaafar All Rights Reserved</p>
    </div>
  );
};

export default Footer;
