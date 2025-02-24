import styled from "styled-components"
import { breakpoints } from "../../styles"

export const Container = styled.div`
  display: flex;
  padding: 80px 0;

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

  h2 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;

    svg {
      margin-right: 6px;
    }
  }

  p {
    font-weight: 300;
    color: #D3D3D3;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
    width: 85vw;
}
  }

  .bold {
    color: #fff;
    font-weight: 400;
  }
`
