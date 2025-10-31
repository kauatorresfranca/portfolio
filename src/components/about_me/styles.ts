import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const AboutMe = styled.div`
  display: flex;
  padding: 80px 0;
  scroll-margin-top: 110px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
}
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;

    svg {
      margin-right: 6px;
    }
  }

  p {
    max-width: 80vw;
    width: 100%;
    margin: 0 auto;
    font-weight: 300;
    color: ${colors.text};
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
}
  }

  .bold {
    color: ${colors.title};
    font-weight: 400;
  }
`
