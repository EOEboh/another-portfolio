import React, { useEffect } from 'react';
import AOS from 'aos';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Form from '../Form';

const Contact = () => {
  useEffect(()=> {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <Section id='contact'> 
      <SectionDivider />
      <br />
        <SectionTitle data-aos='fade-right'>
          Contact Me
        </SectionTitle>
        <SectionText data-aos='zoom-in-up'>
          Got an offer for me?
          Or a project we can work on? <br />
          Fill in the details and I&apos;ll get back to you as soon as I can.
        </SectionText>
        <Form />
    </Section>
    
  )
}

export default Contact;