import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
background:black;
color:white;
font-family: "Helvetica", "Arial", sans-serif;
height: 85vh;
display: flex;
align-items: center;
justify-content: center;
padding: 0rem 2rem;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
max-width:1200px;
width:100%;
justify-content: space-between;
align-items: flex-start;
gap: 4rem;

@media (max-width:768px) {
flex-direction column;
text-align: center;
align-items: center;
}
`;

const Heading = styled(motion.h1)`
font-size: 4rem;
font-weight: 900;
line-weight: 1.2;
text-align: right;

span{
color: #25FA00;
}

@media (max width: 768px) {
font-size: 2.5rem;
}
`;

const Subheading = styled(motion.p)`
font-size: 1.1rem;
font-weight: 500;
max-width: 500px;
line-weight: 1.8;

span{
font-weight: 700;
color: #25FA00;
}

&::after {
content:"";
display: block;
margin-top: 1.5rem;
width: 200px;
height: 1px;
background-color: #25FA00; 
}

@media (max-width: 768px) {
font-size: 1rem;
}
`;


function Home() {
    return (
        <HomeSection>
            <Container>
                <Heading
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration:1.0}}
                >
                    Step into my <br/>
                    <span>Creative <br/>
                    Space.</span>
                </Heading>
                <Subheading
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.5, duration:1.0}}
                >
                   <span>"Design, photography, and creativity—</span> this is my space to bring ideas to life. Explore my
                    work and see how I turn vision into reality."
                </Subheading>
            </Container>
        </HomeSection>
    );
  }
  
  export default Home;
  