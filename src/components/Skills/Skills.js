import React from 'react';
import { DiFirebase } from 'react-icons/di';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiCode, DiGit } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiGatsby, SiGraphql, SiGoogle } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillStyles';

const Skills = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>
      My Skills and Technologies
    </SectionTitle>
    <SectionText>
      I am a Frontend Engineer with over 2 years experience working with different technologies, bringing solutions to the web.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>HTML5</ListTitle>
      </ListItem>
      <ListItem>
        <DiCss3 size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>CSS3</ListTitle>
      </ListItem>
      <ListItem>
        <DiJavascript1 size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>JavaScript</ListTitle>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>React.js (Class and Function)</ListTitle>
      </ListItem>
      <ListItem>
        <SiTypescript size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>TypeScript</ListTitle>
      </ListItem>
      <ListItem>
        <DiNodejs size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Node.js</ListTitle>
      </ListItem>
      <ListItem>
        <DiCode size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Technical Writing</ListTitle>
      </ListItem>
      <ListItem>
        <DiGit size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Git/Shell</ListTitle>
      </ListItem>
      <ListItem>
        <SiNextdotjs size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Next.js</ListTitle>
      </ListItem>
      <ListItem>
        <SiGatsby size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Gatsby</ListTitle>
      </ListItem>
      <ListItem>
        <SiGraphql size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>GraphQL/REST</ListTitle>
      </ListItem>
      <ListItem>
        <SiGoogle size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Googling</ListTitle>
      </ListItem>
      
    </List>
  </Section>
);

export default Skills;
