import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import { SectionText } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
// import { ListItem } from '../Skills/SkillStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href='tel:+2348140165937'>+2348140165937</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href='mailto:ecolejnr007@gmail.com'>ecolejnr007@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Never Stop Being Better Than Yesterday!</Slogan>
        </CompanyContainer>
        <SocialContainer> 
        <SocialIcons href='https://github.com/EOEboh' target='_blank'>
       <AiFillGithub size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://www.linkedin.com/in/emmanuel-o-eboh-51b740194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFyG8vauYRfqI7Kv3VI5i7w%3D%3D' target='_blank'>
       <AiFillLinkedin size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://captain-eo.hashnode.dev/' target='_blank'>
       <SiHashnode size='3rem' />
     </SocialIcons>
     </SocialContainer>
      </SocialIconsContainer>
      <SectionText> Emmanuel Eboh &copy; {new Date().getFullYear()}</SectionText>
    </FooterWrapper>
  );
};

export default Footer;
