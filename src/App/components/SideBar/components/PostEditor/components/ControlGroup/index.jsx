import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import StyledButton from './styled/StyledButton'

const ControlGroup = props => {
  return (
    <StyledWrapper>
      <StyledButton
        onClick={() => alert('sss')}
        disabled={false}
      >
        Public
      </StyledButton>
      <StyledButton
        onClick={() => alert('aaa')}
        disabled={false}
      >
        Schedule
      </StyledButton>
    </StyledWrapper>
  )
}

ControlGroup.propTypes = {
  
}

export default ControlGroup
