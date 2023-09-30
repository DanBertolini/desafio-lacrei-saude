import React from "react";
import { CompanyName, Nav, NavItem, SocialContainer, SocialItem, Wrapper } from "./styled";

export const InstagramLogo = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"></circle><rect x="36" y="36" width="184" height="184" rx="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><circle cx="180" cy="76" r="12"></circle></svg>
export const FacebookLogo = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path d="M168,88H152a23.9,23.9,0,0,0-24,24V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
export const LinkedInLogo = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="88" cy="80" r="12"></circle></svg>

export const Footer = () => {
    const routes = [
        { label: "Home", path: "/", id: "home" }, 
        { label: "Pessoa Usuária", path: "/pessoa-usuaria", id: "pessoa-usuaria" }, 
        { label: "Profissional", path: "/profissional", id: "profissional" }, 
    ];
    const socials = [
      { icon: <InstagramLogo></InstagramLogo>, href: "https://www.instagram.com/lacrei.saude", id: "instagram" },
      { icon: <FacebookLogo></FacebookLogo>, href: "https://www.facebook.com/lacrei.saude", id: "facebook" },
      { icon: <LinkedInLogo></LinkedInLogo>, href: "https://www.linkedin.com/company/lacrei", id: "linkedin" },
    ];
    return (
      <Wrapper>
        <Nav>
            { routes.map((navItem) => <NavItem activeClassName="active" to={navItem.path} key={navItem.id}>{ navItem.label }</NavItem>)}
        </Nav>
        <SocialContainer>
        	{ socials.map((social) => <SocialItem href={social.href} target="_blank" key={social.id}>{ social.icon }</SocialItem>)}
        </SocialContainer>
        <CompanyName>Desafio Front-end Lacrei</CompanyName>
      </Wrapper>
    );
  };