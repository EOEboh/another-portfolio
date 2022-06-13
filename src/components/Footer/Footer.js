import React, { useEffect } from 'react';
import AOS from 'aos';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import { SectionText } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
// import { ListItem } from '../Skills/SkillStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {

  useEffect(()=> {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);
  return (
    <FooterWrapper>
      <LinkList data-aos='zoom-in'>
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
      <SocialIconsContainer data-aos='zoom-in-up'>
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
      <SectionText data-aos='zoom-in-down'> Emmanuel Eboh &copy; {new Date().getFullYear()}</SectionText>
    </FooterWrapper>
  );
};

export default Footer;
