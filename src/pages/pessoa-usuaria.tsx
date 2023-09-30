import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentDescription, ContentImage, ContentSection, ContentWrapper, SubTitle } from "../components/styled-components";

import pessoaUsuariaImg from "../images/pessoaUsuariaImg.svg";

const PessoaUsuaria: React.FC<PageProps> = () => {
  return (
    <div>
      <Header></Header>
      <ContentWrapper>
        <ContentSection>
          <SubTitle>Pessoa Usuária</SubTitle>
          <ContentDescription>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</ContentDescription>
        </ContentSection>
        <ContentSection>
          <ContentImage src={pessoaUsuariaImg} width="555" height="421"/>
        </ContentSection>
      </ContentWrapper>
      <Footer></Footer>
    </div>
  )
}

export default PessoaUsuaria

export const Head: HeadFC = () => <title>Pessoa Usuária | Desafio Lacrei</title>
