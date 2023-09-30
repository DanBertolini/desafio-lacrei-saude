import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentDescription, ContentImage, ContentSection, ContentWrapper, SubTitle } from "../components/styled-components";

import "../static/style.css";
import homeImg from "../images/home.svg";

export const MainContentDescription = styled(ContentDescription)`
    padding-left: 0px;
    border-left: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 3rem;
  max-width: 453px;

  @media (max-width: 520px) {
      flex-direction: column;
      gap: 1rem;
  }
`
export const ActionButtons = styled(Link)`
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: all 0.2s ease 0s;

    &:hover {
        opacity: 0.7;
    }
`;

export const UserButton = styled(ActionButtons)`
    padding: 0.75rem 2rem;
    background-color: rgb(1, 135, 98);
    color: rgb(255, 255, 255);
`;

export const ProfessionalButton = styled(ActionButtons)`
    padding: 0.625rem 2.75rem;
    color: rgb(1, 135, 98);
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(1, 135, 98)
`;

const App: React.FC<PageProps> = () => {
  return (
    <div>
      <Header></Header>
      <ContentWrapper>
        <ContentSection>
          <SubTitle>Boas vindas a Lacrei Saúde</SubTitle>
          <MainContentDescription>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</MainContentDescription>
          <ButtonsContainer>
            <UserButton key="pessoa-usuaria" to="/pessoa-usuaria">Pessoa Usuária</UserButton>
            <ProfessionalButton key="profissional" to="/profissional">Profissional</ProfessionalButton>
          </ButtonsContainer>
        </ContentSection>
        <ContentSection>
          <ContentImage src={homeImg} width="555" height="421"/>
        </ContentSection>
      </ContentWrapper>
      <Footer></Footer>
    </div>
  )
}

export default App

export const Head: HeadFC = () => <title>Home  | Desafio Lacrei</title>
