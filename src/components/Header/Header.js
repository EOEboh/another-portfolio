import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { useTheme } from 'next-themes';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => {

  const { theme, setTheme } = useTheme();

return (
 <Container>
   <Div1> 
     <Link href='/'>
       <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
         <Span>Welcome🙂</Span>
       </a>
     </Link>
   </Div1>
   <Div2>
     <li>
       <Link href='#projects'>
         <NavLink>Projects</NavLink>
       </Link>
     </li>
     <li>
       <Link href='#skills'>
         <NavLink>Skills</NavLink>
       </Link>
     </li>
     <li>
       <Link href='#about'>
         <NavLink>About Me</NavLink>
       </Link>
     </li>
   </Div2>
   <Div3>
     <SocialIcons href='https://github.com/EOEboh' target='_blank'>
       <AiFillGithub size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://www.linkedin.com/in/emmanuel-onyeka-eboh-51b740194/' target='_blank'>
       <AiFillLinkedin size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://twitter.com/eo_eboh' target='_blank'>
       <AiFillTwitterCircle size='3rem' />
     </SocialIcons>
   </Div3>
 </Container>
 );
}

export default Header;
