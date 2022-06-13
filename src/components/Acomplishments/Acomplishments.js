import React, { useEffect } from 'react';
import AOS from 'aos';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Open Source Projects Contributed to'},
  { number: 25, text: 'Technical Articles Written', },
  { number: 3, text: 'Open Source Rewards', }
];

const Acomplishments = () => { 
  useEffect(()=> {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return(
  <Section>
    <SectionDivider />
    <SectionTitle data-aos='fade-right'>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} data-aos='zoom-in'>
          <BoxText>
            {card.text}
          </BoxText>
          <BoxNum>
            {card.number} +
          </BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);}

export default Acomplishments;
