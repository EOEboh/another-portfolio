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
     <SectionText data-aos='zoom-in-up'>I&apos;m a Frontend Software Engineer with {new Date().getFullYear() - 2020} years experience working with various languages and technologies. <br />
     I play basketball for fun, I listen to music for relaxation.</SectionText>

   </Section>
  );
};

export default Timeline;
