"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../styles/navbar.scss";
import { navbar_items } from "../../definitions/constant/navbar";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="navbar__logo">
        <Image src="/logo.svg" alt="taxdo logo" width={197} height={58} />
      </Link>

      {/* Hamburger Toggle */}
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-icon">&#9776;</span>
      </div>

      {/* Links */}
      <ul
        className={`navbar__links ${
          isOpen ? "navbar__links" + "--active" : ""
        }`}
      >
        {navbar_items.map((item, index) => (
          <li key={index} className="navbar__links-item">
            <Link href={item.href} className="navbar__links-item-link">
              {item.lable}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
