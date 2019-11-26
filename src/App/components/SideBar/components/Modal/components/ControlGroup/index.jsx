import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './styled/StyledButton'
import StyledWrapper from './styled/StyledWrapper'

const ControlGroup = ({
  onClose,
  onSchedule,
}) => {

  return (
    <StyledWrapper>
      <StyledButton
        onClick={onSchedule}
        disabled={false}
      >
        Submit
      </StyledButton>
      <StyledButton
        onClick={() => onClose()}
        disabled={false}
      >
        Cancel
      </StyledButton>
    </StyledWrapper>
  )
}

ControlGroup.propTypes = {
  onClose: PropTypes.func,
  onSchedule: PropTypes.func,
}

export default ControlGroup
