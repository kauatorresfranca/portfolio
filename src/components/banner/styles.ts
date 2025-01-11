import styled from "styled-components"


export const background = styled.div`
  background-color: #1f2732;
`

export const Container = styled.div`
  display: flex;
  padding-bottom: 32px;

  img {
    width: 264px;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  margin-right: 280px;

  h4 {
    font-size: 12px;
    color: #65dddd;
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  p {
    color:#D3D3D3;
    margin-bottom: 12px;
  }

  button {
  width: 240px;
  height: 36px;
  font-weight: 700;
  background-color: #2a3342;
  color: #65dddd;
  border: 2px solid #65dddd;
  border-radius: 12px;

    &:hover {
      color: #2a3342;
      background-color: #65dddd;
    }
  }
`

