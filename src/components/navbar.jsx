import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoPNG from '../assets/logo.png';

const Navigation = styled.nav`
font-family: "Helvetica", "Arial", sans-serif;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 3rem;
`;

const LogoSection = styled.div`
display:flex;
align-items:center;
gap: 1.5rem;
`;

const Logo = styled.div`
font-size:3rem;
`;

const Name = styled.div`
font-family: "Helvetica", "Arial", sans-serif;
display:flex;
flex-direction: column;
line-height: 1;
h1 {
font-size:2.5rem;
font-weight:700;
margin:0;
}
h2 {
font-size: 1.5rem;
font-weight:700;
margin:0;
}
`;
const NavigationLinks = styled.div`
display:flex;
align-items: center;
gap: 2rem;

a{
    text-decoration: none;
    color: #000;
    font-weight:600;
    font-size: 1 rem;
    position: relative;

    &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #25FA00;
    transition width 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
    }

    &:hover:after {
    width: 100%
    }

}
`;

function Navbar() {
    return (
        <Navigation>
            <LogoSection>
                <Logo>
                    <img src={LogoPNG} alt="logo" width={80} height={80} />
                </Logo>
                <Name>
                    <h1>Wuilmar</h1>
                    <h2>matias-morales</h2>
                </Name>
            </LogoSection>
            <NavigationLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </NavigationLinks>
        </Navigation>
    )

}

export default Navbar;