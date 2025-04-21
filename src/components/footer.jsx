import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterWrapper = styled.footer`
padding: 2rem;
text-align: center;
font-family: "Helvetica", "Arial", sans-serif;
`;


const Links = styled.div`
    display:flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;

    a {
    font-size: 1.5rem;
    transition: color 0.3s;
    color:black;

    &:hover {
    color: #25FA00;
    }
    }
`;

function Footer() {
    return (
        <FooterWrapper>
            <Links>
                <a href="https://github.com/WuilmarMM" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/wuilmar-matias-morales/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://instagram.com/wuilmarmm" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </Links>
            © {new Date().getFullYear()} Wuilmar Matias-Morales. All Rights Reserved
        </FooterWrapper>
    )
  }
  
  export default Footer;
  