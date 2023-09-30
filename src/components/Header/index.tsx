import React from "react";
import { Link } from "gatsby";
import { Nav, NavItem, Title, Wrapper } from "./styled";

export const Header = () => {
    const routes = [
        { label: "Home", path: "/", id: "home" }, 
        { label: "Pessoa Usuária", path: "/pessoa-usuaria", id: "pessoa-usuaria" }, 
        { label: "Profissional", path: "/profissional", id: "profissional" }, 
    ];
    return (
      <Wrapper className="header">
        <Title to="/" key="home">Lacrei</Title>
        <Nav>
            { routes.map((navItem) => <NavItem activeClassName="active" to={navItem.path} key={navItem.id}>{ navItem.label }</NavItem>)}
        </Nav>
      </Wrapper>
    );
  };