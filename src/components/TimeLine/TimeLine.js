import React, { useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import AOS from 'aos';

const Timeline = () => {

  useEffect(()=> {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
   <Section id='about'>
    <SectionDivider />
    <br />
     <SectionTitle data-aos='fade-right'>About Me</SectionTitle>
     <SectionText data-aos='zoom-in-up'>  A frontend software developer with an extra superpower— technical writing.<br/>

Whether I'm writing React or fiddling with AWS or solving algorithms in JavaScript, my main objective is always the same, which is to create clean, understandable content that solves problems.

<p>When not coding or writing, I'm most likely watching a documentary, playing basketball or simply wondering if there's a slight chance the earth is flat.</p>
     </SectionText>

   </Section>
  );
};

export default Timeline;
