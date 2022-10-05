import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((index) => (
        <BlogCard key={index.id}>
          <Img src={index.image} />
          <TitleContent>
            <HeaderThree title>{index.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{index.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {index.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={index.visit}>Visit</ExternalLinks>
            <ExternalLinks href={index.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
