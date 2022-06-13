import React, { useEffect } from 'react';
import AOS from 'aos';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiCode, DiGit } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiGatsby, SiGraphql, SiGoogle } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillStyles';

const Skills = () => {  
  useEffect(()=> {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);


return (
  <Section id='skills'>
    <SectionDivider />
    <br />
    <SectionTitle data-aos='fade-right'>
      My Skills and Technologies
    </SectionTitle>
    <SectionText data-aos='zoom-in-up'>
      I am a Frontend Engineer with over { new Date().getFullYear() - 2020} experience working with different technologies, bringing solutions to the web.
    </SectionText>
    <List>
      <ListItem data-aos='fade-right'>
        <DiHtml5 size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>HTML5</ListTitle>
      </ListItem>
      <ListItem data-aos='zoom-in-down'>
        <DiCss3 size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>CSS3</ListTitle>
      </ListItem>
      <ListItem data-aos='fade-left'>
        <DiJavascript1 size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>JavaScript</ListTitle>
      </ListItem>
      <ListItem data-aos='fade-right'>
        <DiReact size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>React.js (Class and Function)</ListTitle>
      </ListItem>
      <ListItem data-aos='zoom-in-down'>
        <SiTypescript size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>TypeScript</ListTitle>
      </ListItem>
      <ListItem data-aos='fade-left'>
        <DiNodejs size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Node.js</ListTitle>
      </ListItem>
      <ListItem data-aos='fade-right'>
        <DiCode size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Technical Writing</ListTitle>
      </ListItem>
      <ListItem data-aos='zoom-in-up'>
        <DiGit size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Git/Shell</ListTitle>
      </ListItem>
      <ListItem data-aos='fade-left'>
        <SiNextdotjs size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Next.js</ListTitle>
      </ListItem>
      <ListItem data-aos='fade-right'>
        <SiGatsby size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Gatsby</ListTitle>
      </ListItem>
      <ListItem data-aos='zoom-in-up'>
        <SiGraphql size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>GraphQL/REST</ListTitle>
      </ListItem>
      <ListItem data-aos='fade-left'>
        <SiGoogle size='3rem' />
        <ListContainer></ListContainer>
        <ListTitle>Googling</ListTitle>
      </ListItem>
      
    </List>
  </Section>
);}

export default Skills;
