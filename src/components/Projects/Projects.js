import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import axios from 'axios';
import { useQuery } from 'react-query';


// fetching articles using the hashnode graphql api
const endpoint = 'https://api.hashnode.com';
const ARTICLE_QUERY = `
{
  user(username: "captain-eo") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;

const Projects = () => {

  const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: ARTICLE_QUERY
      }
    }).then(response => response.data.data);
  });

  if (isLoading) return 'Articles loading...';
  if(error) return <pre>{error.message}</pre>;


return (
  <Section nopadding  id='projects'>
    <SectionDivider />
    <SectionTitle main>Latest Software Projects</SectionTitle>
    <GridContainer>
      {projects.map(({title, description, id, image,tags,source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
            <CardInfo>
              {description}
            </CardInfo>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>

    <SectionTitle main>Latest Blogs</SectionTitle>
    <GridContainer>
      {data.user.publication.posts?.map((post, i) => (
        <BlogCard key={i}>
          <Img src={`${post.coverImage}`} />
          <TitleContent>
            <HeaderThree title>
              {post.title}
            </HeaderThree>
            <Hr />
          </TitleContent>
            <CardInfo>  
              {post.brief}
            </CardInfo>
          <UtilityList>
            <ExternalLinks href={`https://captain-eo.hashnode.dev/${post.slug}`} target='_blank'>Read More</ExternalLinks>
            <ExternalLinks href={'https://captain-eo.hashnode.dev/'} target='_blank'>My Blog</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);
}

export default Projects;