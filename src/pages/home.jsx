import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
background:black;
color:white;
font-family: "Helvetica", "Arial", sans-serif;
`;

function Home() {
    return (
        <HomeSection>
            <h1>Step into my Creative Space</h1>
            <h3>
            "Design, photography, and creativity—this is my space to bring ideas to life. Explore my
             work and see how I turn vision into reality."</h3>
        </HomeSection>
    );
  }
  
  export default Home;
  