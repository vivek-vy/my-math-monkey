import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

import logo from "../assets/header-images/math-monkey-logo.png";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "../styles/navBar.css";
import { CommonButton } from "./CommonButton";

export const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-white px-2 py-0  px-sm-5 w-100  fw-medium"
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" style={{height:"105px",width:"160px"}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="w-100 justify-content-end ms-3 ms-sm-0"
        id="basic-navbar-nav"
      >
        <Nav className="w-100 d-flex gap-sm-4 justify-content-center">
          <Nav.Link>
            <NavLink
              to="/"
              className=" my-nav-menu text-decoration-none text-dark"
            >
              Home
            </NavLink>{" "}
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/about"
              className=" my-nav-menu text-decoration-none text-dark"
            >
              About
            </NavLink>
          </Nav.Link>

          <NavDropdown
            className="no-caret"
            title={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "black",
                }}
              >
               <span className=" my-nav-menu ">  Programs </span> <FiChevronDown style={{ fontSize: "1rem" }} />
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Virtual Class
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Play to Learn
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              5 Brain Abilities
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              BrainThink Learning
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              MathBrain for Your Child
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Vedic Math</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <NavLink className=" my-nav-menu text-decoration-none text-dark">
              Centres In Asia
            </NavLink>{" "}
          </Nav.Link>
          <Nav.Link>
            <NavLink className=" my-nav-menu text-decoration-none text-dark">
              Read book
            </NavLink>
          </Nav.Link>
          <NavDropdown
            className="no-caret"
            title={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "black",
                }}
              >
                <span className=" my-nav-menu "> Opportunities </span>{" "}
                <FiChevronDown style={{ fontSize: "1rem" }} />
              </span>
            }
            id="nav-opportunity"
          >
            <NavDropdown.Item href="#action/3.1">Partnership</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Career</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            className="no-caret"
            title={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "black",
                }}
              >
               <span className=" my-nav-menu ">Contact Us</span>   <FiChevronDown style={{ fontSize: "1rem" }} />
              </span>
            }
            id="nav-Contact Us"
          >
            <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CommonButton btnText={"Call Us"}/>
      </Navbar.Collapse>
    </Navbar>
  );
};
