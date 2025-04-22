import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background:white;
border-radius:12px;
overflow:hidden;
box-shadow: 0 4px 10px rgba(0,0,0,0.07)
display: flex;
flex-direction: column;
transition: transform 0.3s ease;

&:hover {
transform: translateY(-6px);
}

img {
width:100%;
height: 240px;
object-fit: contain;
}

div {
padding: 1.25rem;
}

h3 {
font-size: 1.25rem;
font-weight: 800;
margin-bottom: 0.5rem;
}

p{
font-size: 1rem;
margin-bottom: 1.25rem;
line-height: 1.6;
}
`;

const ButtonGroup = styled.div`
display:flex;
gap: 1rem;
`;

const Button = styled.a`
text-decoration: none;
color: white;
background: black;
padding: 0.5rem 1rem;
font-weight: 600;
border-radius: 8px;
transition: background 0.3s ease;
cursor: pointer;

&:hover {
background: #25FA00;
color: black;
}
`;

function ProjectCard({ image, title, description, github, live }) {
    return (
        <Card>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ButtonGroup>
                    {github && (<Button href={github} target="_blank" rel="noopener noreferrer">Github</Button>)}
                    {live && (<Button href={live} target="_blank" rel="noopener noreferrer">View Live</Button>)}
                </ButtonGroup>
            </div>
        </Card>

    )
}

export default ProjectCard;