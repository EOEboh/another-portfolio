import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Form from '../Form';

const Contact = () => {
  return (
    <Section id='contact'> 
      <SectionDivider />
      <br />
        <SectionTitle>
          Contact Me
        </SectionTitle>
        <SectionText>
          Got an offer for me?
          Or a project we can work on? <br />
          Fill in the details and I&apos;ll get back to you as soon as I can.
        </SectionText>
        <Form />
    </Section>
    
  )
}

export default Contact;