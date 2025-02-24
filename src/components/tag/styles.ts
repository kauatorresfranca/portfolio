import styled from "styled-components"

export const TagContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.color == "#ddd" ? '#2a3342' : '#fff'};
  border-radius: 20px;
  width: 60px;
  text-align: center;
`
