import styled from "styled-components"

export const Photo = styled.div`
  margin-right: 180px;

  img {
    height: 160px;
    width: 160px;
    border-radius: 50% 50% 50% 50%;
    border: 3px solid #65dddd;
    padding: 5px;
    margin-bottom: 16px;
  }

  h3 {
    text-align: center;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 80px 0;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`
export const Icon = styled.div`

  svg {
    height: 32px;
    width: 32px;
    transition: transform 0.3s ease;
    &:hover {
          transform: rotate(15deg);
        }
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

    svg {
      margin-right: 6px;
    }
  }

  p {
    font-weight: 300;
    color: #D3D3D3;
  }

  .bold {
    color: #fff;
    font-weight: 400;
  }
`
