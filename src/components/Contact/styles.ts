import styled from "styled-components"
import { motion } from "framer-motion"
import { breakpoints, colors } from "../../styles"

export const ContactSection = styled.section`
  padding: 100px 0;
  background-color: ${colors.background};
`

export const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 42px;
    color: ${colors.title};
    font-weight: 800;
    margin-bottom: 16px;
  }

  p {
    color: ${colors.text};
    max-width: 500px;
    margin: 0 auto;
    opacity: 0.8;
  }
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .info-card {
    background: ${colors.secondaryBackground};
    padding: 24px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(10px);
      border-color: ${colors.primary};
    }

    i {
      font-size: 32px;
      color: ${colors.primary};
    }

    h5 {
      color: ${colors.text};
      font-size: 14px;
      margin-bottom: 4px;
      opacity: 0.6;
    }

    a {
      color: ${colors.title};
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
    }
  }
`

export const FormWrapper = styled(motion.div)`
  background: ${colors.secondaryBackground};
  padding: 40px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-group {
    position: relative;
    width: 100%;

    input, textarea {
      width: 100%;
      background: ${colors.background};
      border: 2px solid transparent;
      border-radius: 12px;
      padding: 16px;
      color: ${colors.title};
      font-size: 16px;
      outline: none;
      transition: all 0.3s ease;

      &:focus {
        border-color: ${colors.primary};
      }
    }

    textarea {
      height: 150px;
      resize: none;
    }

    label {
      position: absolute;
      left: 16px;
      top: 16px;
      color: ${colors.text};
      opacity: 0.5;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label,
    textarea:focus + label,
    textarea:not(:placeholder-shown) + label {
      top: -10px;
      left: 12px;
      font-size: 12px;
      color: ${colors.primary};
      background: ${colors.secondaryBackground};
      padding: 0 8px;
      opacity: 1;
    }
  }
`

export const SubmitButton = styled.button`
  background: ${colors.primary};
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px ${colors.primary}44;
  }

  i {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateX(5px) rotate(-20deg);
  }
`
