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
     <SectionText data-aos='zoom-in-up'> A Frontend Software Engineer with a talent for solving problems, making in-depth research and writing neat code.  
     <p> I am that guy you would want in your team, because the value I bring to teamwork is like bread to butter.</p> 
     <p>
      I write technical articles and documentations of different technologies and industry trends. Check out my blog below.
     </p>
     </SectionText>

   </Section>
  );
};

export default Timeline;
