import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import StyledButton from './styled/StyledButton'

const ControlGroup = ({
  handleOpen,
}) => {
  return (
    <StyledWrapper>
      <StyledButton
        onClick={() => alert('sss')}
        disabled={false}
      >
        Public
      </StyledButton>
      <StyledButton
        onClick={() => handleOpen()}
        disabled={false}
      >
        Schedule
      </StyledButton>
    </StyledWrapper>
  )
}

ControlGroup.propTypes = {
  handleOpen: PropTypes.func,
}

export default ControlGroup
