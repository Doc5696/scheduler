import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: 300px;
  min-height: 200px;
  overflow-y: auto;
  font-size: 18px;
  padding: 5px 10px;
  resize: none;
  border: 2px solid #777;
  border-radius: 3px;
  transition: 0.35s;
  background: rgba(255,255,255,0.8);
  &:focus{
    outline: none;
    border: 2px solid #8b0000;
    box-shadow: 3px 3px 9px 0px rgba(255,255,255,0.12);
    background: rgba(255,255,255,1);
  }
`

export default StyledTextArea
