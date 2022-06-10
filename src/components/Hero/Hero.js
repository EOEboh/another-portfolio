import React from 'react';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        I&apos;m Emmanuel
      </SectionTitle>
      <SectionText hero>
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
    </LeftSection>
    
  </Section>
);

export default Hero;