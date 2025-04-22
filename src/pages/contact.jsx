import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
padding: 0rem 2rem;
display:flex;
flex-direction: column;
max-width:700px;
margin: auto;

h2 {
font-size: 2.75rem;
font-weight: 900;
margin-bottom: 1rem;
color: #25FA00;
}

input, textarea {
margin-bottom: .75rem;
padding: .5rem;
border: 1px solid #ccc;
border-radius: 12px;
}

button {
    background: black;
    color: white;
    border-radius: 12px;
    padding: 0.75rem;
    cursor:pointer;
    width: 200px;
    margin: 0 auto;
    display:block;

    &:hover {
    background: #25FA00;
    color: black;
    }
}
`;

function Contact() {

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    
    const handleForm = c => {
        setForm({ ...form, [c.target.name]: c.target.value })
    };

    const submitForm = c => {
        c.preventDefault();
        if (!form.name || !form.email || !form.message) {
            alert("Please fill out all fields");
        } else {
            alert("Form Submitted! I will reach out to you shortly");
            setForm({ name: '', email: '', message: '' });
        }

    };

    return (
        <ContactForm onSubmit={submitForm}>
            <h2>Contact Me</h2>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleForm} />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleForm} />
            <textarea name="message" rows="5" placeholder="Your message" value={form.message} onChange={handleForm}/>
            <button type="submit">Send</button>
        </ContactForm>
    );
  }
  
  export default Contact;
  