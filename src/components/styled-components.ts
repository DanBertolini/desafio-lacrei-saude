import styled from "styled-components";

export const ContentWrapper = styled.main`
    width: 100%;
    padding: 4rem 4rem 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 520px) {
        padding: 1rem 1rem 0px;
    }

    @media (max-width: 1040px)  {
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        padding: 2rem 2rem 0px;
    }
`;

export const ContentSection = styled.section`
    max-width: 540px;
`;

export const ContentDescription = styled.p`
    line-height: 2rem;
    margin-top: 2rem;
    padding-left: 1rem;
    border-left: 5px solid rgb(1, 135, 98);
    font-size: 1.5rem;
    color: rgb(81, 81, 81);

    @media (max-width: 520px) {
        line-height: 1.25rem;
        margin-top: 0.875rem;
        font-size: 0.875rem;
    }

    @media (max-width: 1040px) {
        line-height: 1.5rem;
        margin-top: 1rem;
        font-size: 1rem;
    }
`;

export const ContentImage = styled.img`
    width: 100%;
`;

export const SubTitle = styled.h2`
    font-size: 3rem;

    @media (max-width: 520px) {
        font-size: 1.5rem;
    }

    @media (max-width: 1040px) {
        font-size: 2rem;
    }
`;
