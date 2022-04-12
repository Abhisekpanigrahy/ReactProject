import React from "react";
import Img11 from "../Assets/img11.png";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyels.js";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Google from "@mui/icons-material/Google";
import Pinterest from "@mui/icons-material/Pinterest";
import LanguageIcon from "@mui/icons-material/Language";
import Instagram from "@mui/icons-material/Instagram";
import Language from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <div className="bottom-bar mb-3"></div>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Terms Of Service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Works</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <div className="bottom-bar mb-3"></div>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Cookies</FooterLink>
            <FooterLink href="#">Help</FooterLink>
            <FooterLink href="#">Our Teams</FooterLink>
            <FooterLink href="#">Awards</FooterLink>
            <FooterLink href="#">Leadership</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <div className="bottom-bar mb-3"></div>
            <FooterLink href="#">Design</FooterLink>
            <FooterLink href="#">Strategy</FooterLink>
            <FooterLink href="#">Content</FooterLink>
            <FooterLink href="#">Branding</FooterLink>
            <FooterLink href="#">Illustration</FooterLink>
            <FooterLink href="#">Digital</FooterLink>
          </Column>
          <Column>
            <Heading>Instagram</Heading>
            <div className="bottom-bar mb-3"></div>
            <img src={Img11} alt="" />
          </Column>
        </Row>
      </Container>

      <div className="container">
        <div className="row px-5">
          <div
            className="col-lg-5 col-12 px-5 py-5"
            style={{ marginLeft: "120px" }}
          >
            <h2 className="mb-3" style={{ color: "white", fontSize: "30px" }}>
              {" "}
              Joale <span>.</span>
            </h2>
            <p style={{ color: "white", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tempora, ratione consequuntur illum error nulla laborum libero
              odit ipsum officiis?
            </p>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  color: "white",
                  marginRight: "8px",
                }}
              >
                <FacebookOutlined />
              </div>
              <div
                style={{
                  color: "rgb(220, 98, 98)",
                  marginRight: "8px",
                }}
              >
                <Twitter />
              </div>
              <div
                style={{
                  color: "white",
                  marginRight: "8px",
                }}
              >
                <Google />
              </div>
              <div
                style={{
                  color: "white",
                  marginRight: "8px",
                }}
              >
                <Pinterest />
              </div>
              <div
                style={{
                  color: "white",
                  marginRight: "8px",
                }}
              >
                <Language />
              </div>
              <div
                style={{
                  color: "white",
                }}
              >
                <Instagram />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12 py-5" style={{ color: "white" }}>
            <h5 className="mb-3" style={{ fontSize: "17px" }}>
              Contact
            </h5>
            <div className="bottom-bar mb-3"></div>
            <p className="text">
              112 West 11th Street,Suite 991 New york <br />
              NY 21234 <br />
              Email:creativewithjoy@gmail.com <br />
              Phone:+1200 (989) 159 081 <br />
              Fax:+1200 (989) 159 081
            </p>
          </div>

          <div className="col-lg-2 col-12 py-5" style={{ color: "white" }}>
            <h5 className="mb-3" style={{ fontSize: "17px" }}>
              Latest Tweets
            </h5>
            <div className="bottom-bar mb-3"></div>
            <p className="text">
              Did you know on <span> @envatoelements </span>
              subsctiption now gets you access to <br /> 1000+{" "}
              <span> @tutsplus </span> courses? Learn more at{" "}
              <span> http://enva/to/iqn9Q.</span>
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default Footer;
