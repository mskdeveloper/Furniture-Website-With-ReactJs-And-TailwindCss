import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "/logo.png";

const Navbar = () => {
  const navLinks = [
    { id: 1, url: "/products", title: "Ptoducts" },
    { id: 2, url: "/stores", title: "Stores" },
    { id: 3, url: "/ourstory", title: "Our Story" },
    { id: 4, url: "/blog", title: "Blog" },
  ];
  return (
    <div className="bg-blue-50">
      <nav className="container mx-auto flex justify-between py-8  items-center lora-font">
        <div className="logo flex items-center">
          <img src={Logo} className="w-[120px]" />
          <Link to="/">HOME GARDEN</Link>
        </div>
        <div className="menu flex gap-5">
          {navLinks.map((item) => {
            return (
              <NavLink key={item.id} to={item.url} className="px-3 py-">
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
