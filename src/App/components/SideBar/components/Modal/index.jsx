import React from 'react'
import PropTypes from 'prop-types'

import TimePicker from './components/TimePicker'
import ControlGroup from './components/ControlGroup'

import Background from './styled/Background'
import StyledWrapper from './styled/StyledWrapper'
 

const Modal = ({
  open,
  onClose,
  handleChange,
  onSchedule,
}) => {

  return (
    <Background open={open}>
      <StyledWrapper>
        <TimePicker
          handleChange={handleChange}
        />
        <ControlGroup
          onSchedule={onSchedule}
          onClose={onClose}
        />
      </StyledWrapper>
    </Background>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  handleChange: PropTypes.func,
  onSchedule: PropTypes.func,
}

export default Modal
