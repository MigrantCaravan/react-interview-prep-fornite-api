import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Bar() {
  return (
    <Nave>
      <Link to="/">Home</Link>
      <NavLinks>
        <Link style={{ color: "Black" }} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={{ color: "Black" }} to="/about">
          <li>About</li>
        </Link>
      </NavLinks>
    </Nave>
  );
}

const Nave = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background-color: aliceblue;
`;

const NavLinks = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
