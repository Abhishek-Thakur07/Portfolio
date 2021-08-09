import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Abhishek Thakur <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Web Application development via MERN stack programming and great UI/UX
        designs.
      </SectionText>
      <Button
        onclick={() => (window.location.href = "https://www.google.com/")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
