import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const Timeline = () => {
  return (
   <Section id='about'>
    <SectionDivider />
    <br />
     <SectionTitle>About Me</SectionTitle>
     <SectionText>I&apos;m a Frontend Software Engineer with {new Date().getFullYear() - 2020} years experience working with various languages and technologies. <br />
     I play basketball for fun, I listen to music for relaxation.</SectionText>

   </Section>
  );
};

export default Timeline;
