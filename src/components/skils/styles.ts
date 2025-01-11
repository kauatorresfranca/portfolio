import styled from "styled-components"

export const Background = styled.div`
  padding-top: 32px;
  background-color: #1f2732;

  h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;

    svg {
      margin-right: 6px;
    }
  }
`

export const ListSkil = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

`

export const Skil = styled.div`
  padding: 24px;
  margin-bottom: 40px;
  border-radius: 18%;
  background-color: #2a3342;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }

    h4 {
      text-align: center;
      margin-bottom: 8px;
      color: #D3D3D3;
    }

    .diferent {
      margin-left: 4px;
    }

    img {
      width: 70px;
      text-align: center;
    }
`
