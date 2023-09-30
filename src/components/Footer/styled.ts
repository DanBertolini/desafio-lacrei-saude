import { Link } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 0px 4rem;
    border-top: 1px solid rgb(176, 224, 211);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 2rem 0px 0.5rem;
    height: 10rem;

    @media (max-width: 520px) {
        margin: 0px 1rem;
        padding-top: 1rem;
    }

    @media (max-width: 1040px) {
        margin: 0px 2rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2.5rem;

    @media (max-width: 520px) {
        flex-direction: column;
        gap: 0.25rem;
    }
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    color: rgb(31, 31, 31);
    font-size: 1rem;
    transition: all 0.2s ease 0s;

    &.active {
        font-weight: 700;
    }

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 520px) {
        font-size: 0.875rem;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

export const SocialItem = styled.a`
    font-size: 2rem;
    color: rgb(1, 135, 98);
    cursor: pointer;
    transition: all 0.2s ease 0s;

    &:hover {
        opacity: 0.7;
    }
`
export const CompanyName = styled.p`
    font-size: 0.75rem;
    color: rgb(81, 81, 81);
`;