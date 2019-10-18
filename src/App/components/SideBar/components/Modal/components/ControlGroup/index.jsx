import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './styled/StyledButton'
import StyledWrapper from './styled/StyledWrapper'

const ControlGroup = ({
  onClose
}) => {

  return (
    <StyledWrapper>
      <StyledButton
        // onClick={() => alert('sss')}
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
}

export default ControlGroup
