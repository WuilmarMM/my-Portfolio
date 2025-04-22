import React from 'react';
import ProjectCard from '../components/projectcard';
import styled from 'styled-components';

import flagImage from '../assets/FamLogo.PNG'
import MexiturasImg from '../assets/mexiturasLogo.png';
import emailImg from '../assets/emailRedesign.png';




const ProjectsContainer = styled.section`
font-family: "Helvetica", "Arial", sans-serif;
padding: 0rem 2rem;
background: #fdfdfd;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  text-align: center;
  color:#25FA00;
`;

const ProjectGrid = styled.div`
display: grid;
grid-template-colums: repeat(auto-fit,minmax(300px,1fr));
gap: 2rem;
max-width:1200px;
margin: 0 auto;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectGrid>
        <ProjectCard
          image={flagImage}
          title="Flag-a-mania"
          description="We created a site where you can learn flags and also get to know other cultures.
          Site was made using HTML, CSS, Javascript, MySQL, & PHP."
          github="https://github.com/iamj4y/Flag-A-Mania"
          live="https://students.gaim.ucf.edu/~wu049684/Flag-A-Mania/html/"
        />
        <ProjectCard
          image={MexiturasImg}
          title="Mexituras"
          description="Our recent project, Mexituras, involved assisting a local brand in
           redesigning their website and logo to create a more cohesive and collective feel.
            Experience our expert website development services and let us help bring your vision 
            to life online."
          github=""
          live="https://www.mexituras.com"
        />
        <ProjectCard
          image={emailImg}
          title="Email Redesign"
          description="Redesigned an email platform to have a dedicated Unread only tab where
           clients can catch up on emails."
          github=""
          live="https://www.figma.com/proto/jD4VhOFzIjDrZL23Alrt5d/Untitled?node-id=1-2&p=f&t=2i1eJXIXUmtqUbAu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
        />
      </ProjectGrid>
    </ProjectsContainer>
  )
}
  
  export default Projects;
  