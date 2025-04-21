import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Container = styled.div`
display:flex;
flex-direction: column;
min-height: 100vh;
`;

const PageContainer = styled.div`
flex: 1;
`;

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <PageContainer>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </PageContainer>
        <Footer />
      </Container>
    </Router>
  );
}
export default App;
