import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Open Source Projects Contributed to'},
  { number: 'Lost Count', text: 'Lines of Code', },
  { number: 25, text: 'Technical Articles Written', },
  { number: 2, text: 'Awards', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
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
);

export default Acomplishments;
