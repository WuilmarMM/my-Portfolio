import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
font-family: "Helvetica", "Arial", sans-serif;
padding: 3rem;
`;

function About() {
    return (
        <AboutSection>
            <h2>About Me</h2>
            <h3>My Name is Wuilmar Matias-Morales</h3>
            <h4>-a creative thinker, web designer, and photographer</h4>
            <p>I thrive on innovation, problem-solving, and bringing ideas to life. Web design
                lets me blend creativity with technology to craft engaging, functional experiences.
                Photography, on the other hand, allows me to capture stories and emotions through
                visuals. Fueled by coffee (or matcha), I’m always exploring new ways to create,
                innovate, and make an impact.</p>
        </AboutSection>
    );
  }
  
  export default About;
  