import { Link } from "gatsby";
import styled from "styled-components";

export const Wrapper = styled.header`
    padding: 0.5rem 4rem;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(238, 238, 238);
    font-weight: bold;

    @media (max-width: 520px) {
        padding: 0.5rem 1rem;
        flex-direction: column;
    }
    @media (max-width: 1040px) {
        padding: 0.5rem 2rem;
    }
}
`;
export const Title = styled(Link)`
    font-size: 2em;
    margin: 0;
    color: rgb(1, 135, 98);
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2.5rem;
    -webkit-box-pack: justify;
    justify-content: space-between;

    @media (max-width: 520px) {
        gap: 1rem;
    }

    @media (max-width: 1040px) {
        gap: 2rem;
    }
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    color: rgb(31, 31, 31);
    font-size: 1rem;
    transition: all 0.2s ease 0s;

    &.active {
        color: rgb(1, 135, 98);
    }

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 520px) {
        font-size: 0.875rem;
    }
`