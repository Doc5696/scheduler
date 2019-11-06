import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import StyledButton from './styled/StyledButton'

const ControlGroup = ({
  onCreate,
  handleOpen,
}) => {
  return (
    <StyledWrapper>
      <StyledButton
        onClick={() => onCreate()}
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
  onCreate: PropTypes.func,
  handleOpen: PropTypes.func,
}

export default ControlGroup
