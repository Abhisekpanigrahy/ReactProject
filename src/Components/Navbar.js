import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../Components/Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

export default function () {
  return (
    <div>
      <div className="navbar-color">
        <div className="container nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <Navbar className="navbar-bg" expand="lg">
                <Container>
                  <Navbar.Brand className="mx-4 title" href="#">
                    Joale <span>.</span>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0 headertitle"
                      style={{ maxHeight: "100px" }}
                      navbarScroll
                    >
                      <Nav.Link className="my-2 mx-3" href="#action1">
                        {" "}
                        Home
                      </Nav.Link>
                      <Nav.Link
                        className="menu-active my-2 mx-3"
                        href="#action2"
                      >
                        Pages
                      </Nav.Link>
                      <Nav.Link className="my-2 mx-3" href="#action2">
                        Portfolio
                      </Nav.Link>
                      <Nav.Link className="my-2 mx-3" href="#action2">
                        Blog
                      </Nav.Link>
                      <Nav.Link className="my-2 mx-3" href="#action2">
                        Shop
                      </Nav.Link>
                      <Nav.Link className="my-2 mx-3" href="#action2">
                        Elements
                      </Nav.Link>

                      <div className="icon" style={{ display: "flex" }}>
                        <div
                          style={{
                            marginRight: "15px",
                          }}
                        >
                          <ShoppingCartOutlinedIcon />
                        </div>
                        <div
                          style={{
                            marginRight: "15px",
                          }}
                        >
                          <SearchOutlined />
                        </div>
                        <div
                          style={{
                            marginRight: "15px",
                          }}
                        >
                          <AppsOutlinedIcon />
                        </div>
                      </div>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
