import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentDescription, ContentImage, ContentSection, ContentWrapper, SubTitle } from "../components/styled-components";

import profissionalImg from "../images/profissional.svg";

const Profissional: React.FC<PageProps> = () => {
  return (
    <div>
      <Header></Header>
      <ContentWrapper>
        <ContentSection>
          <SubTitle>Profissional</SubTitle>
          <ContentDescription>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</ContentDescription>
        </ContentSection>
        <ContentSection>
          <ContentImage src={profissionalImg} width="555" height="421"/>
        </ContentSection>
      </ContentWrapper>
      <Footer></Footer>
    </div>
  )
}

export default Profissional

export const Head: HeadFC = () => <title>Profissional | Desafio Lacrei</title>
