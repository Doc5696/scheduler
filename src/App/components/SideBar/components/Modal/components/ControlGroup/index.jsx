import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './styled/StyledButton'
import StyledWrapper from './styled/StyledWrapper'

const ControlGroup = ({
  onClose,
  onSchedule,
  post,
}) => {

  return (
    <StyledWrapper>
      <StyledButton
        onClick={() => onSchedule(post)}
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
  post: PropTypes.object,
}

export default ControlGroup
