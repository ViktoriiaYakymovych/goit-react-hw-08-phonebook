import { StyledMain, StyledSection } from "./Section.styled";

export const Section = ({title, children}) => {
return (
  <StyledMain>
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  </StyledMain>
);
}