import React, { useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import AOS from 'aos';

const Hero = () => {
  useEffect(()=> {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
  <Section  nopadding>
    <LeftSection>
      <SectionTitle main center data-aos='fade-right'>
        Hey there! <br />
        I&apos;m <br />Emmanuel
      </SectionTitle>
      <SectionText hero data-aos='fade-left'>
        <ul>
          <li>
            Frontend Developer
          </li>  
          <li>
            Technical Writer
          </li>  
          <li>
            Open Source Enthusiast
          </li>  
        </ul> 
      </SectionText>
     
    </LeftSection>
    <Button>
        <a 
          href='/files/Emmanuel_Eboh.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download
          style={{color: '#fff'}}
          >
        My Resume
        </a>
    </Button>
  </Section>
);}

export default Hero;