import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from '../assets/ProfilePhoto.jpg'
import { motion } from 'framer-motion';

const AboutSection = styled.section`
font-family: "Helvetica", "Arial", sans-serif;
display:flex;
justify-content: space-between;
align-items: center;
background: white;
padding: 0rem 8rem;

@media (max-width: 900px) {
flex-directional: column;
text-align: center;
gap: 2rem;
}
`;

const Text = styled.div`
max-width: 800px;

h2 {
font-size: 2.75rem;
font-weight: 900;
margin-bottom: 1rem;
color: #25FA00;
}

h3 {
font-size: 1.5rem;
font-weight: 800;
margin-bottom: 0.5rem;
}
`;

const Profile = styled(motion.div)`

padding: 2rem;

img {
width: 220px;
height: auto;
border-radius: 30%;
}
`;

function About() {
    return (
        <AboutSection>
            <Text>
            <h2>About Me</h2>
            <h3>My Name is Wuilmar Matias-Morales</h3>
            <h4>-a creative thinker, web designer, and photographer</h4>
            <p>I thrive on innovation, problem-solving, and bringing ideas to life. Web design
                lets me blend creativity with technology to craft engaging, functional experiences.
                Photography, on the other hand, allows me to capture stories and emotions through
                visuals. Fueled by coffee (or matcha), I’m always exploring new ways to create,
                    innovate, and make an impact.</p>
            <p>Skills: Front-End Development & Design, UX Design.</p>
            </Text>
            <Profile
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay: 0.3, duration:1.0}}
            >
                <img src={ProfilePhoto} alt="Wuilmar Profile"/>
            </Profile>
        </AboutSection>
    );
  }
  
  export default About;
  