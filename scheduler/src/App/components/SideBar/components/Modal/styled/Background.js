import styled from 'styled-components'

const Background = styled.div`
  display: ${({ open }) => {
    if (open) {
      return 'block'
    }
    return 'none'
  }};
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.2);
`

export default Background
