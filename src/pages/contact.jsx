import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
background: yellow;
`;

function Contact() {
    return (
        <ContactForm>
            <h2>Contact Me</h2>
            <input></input>
            <input></input>
            <textarea></textarea>
            <button>Send</button>
        </ContactForm>
    );
  }
  
  export default Contact;
  