import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        To be awesome
      </SectionText>
      <Button onClick={() => window.location = "#tech"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;