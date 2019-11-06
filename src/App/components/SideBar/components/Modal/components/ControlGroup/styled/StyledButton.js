import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${({ disabled }) => {
    if (!disabled) {
      return 'rgba(255,255,255,0.7)'
    }
    return 'transparent'
  }};
  min-width: 120px;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 700;
  border: ${({ disabled }) => {
    if (!disabled) {
      return '1px solid #555'
    }
    return '1px solid #fff'
  }};
  border-radius: 5px;
  color: ${({ disabled }) => {
    if (!disabled) {
      return '#333'
    }
    return '#fff'
  }};
  transition: 0.35s;
  &:focus{
    outline: none;
  }
  &:hover{
    cursor: ${({ disabled }) => {
    if (!disabled) {
      return 'pointer'
    }
    return 'not-allowed'
  }};
    background: ${({ disabled }) => {
    if (!disabled) {
      return '#fff'
    }
    return 'transparent'
  }};
  }
`

export default StyledButton
