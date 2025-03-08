import React from "react";
import { FaUser, FaBell, FaEye } from "react-icons/fa";
import "../css/Header.css";
import herbalife_logo from "../public/assets/herbalife_logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Ícone de alinhamento à esquerda */}
        <div className="header-left"></div>

        {/* Logo no centro */}
        <div className="logo">
          <img src={herbalife_logo} alt="Logo" />
        </div>

        {/* Ícones à direita */}
        <div className="header-right">
          <FaBell className="icon" />
          <FaEye className="icon" />
          <FaUser className="icon" />
        </div>
      </div>
    </header>
  );
}
