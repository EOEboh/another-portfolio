import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I love pizza and ewa agoyin. Thank You very much
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Front End</ListTitle>
        <ListParagraph>
          Experience With Ewa Agoyin and Agege Bread
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Front End</ListTitle>
        <ListParagraph>
          Experience With Ewa Agoyin and Agege Bread
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Front End</ListTitle>
        <ListParagraph>
          Experience With Ewa Agoyin and Agege Bread
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
