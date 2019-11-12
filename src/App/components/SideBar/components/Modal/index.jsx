import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TimePicker from './components/TimePicker'
import ControlGroup from './components/ControlGroup'

import Background from './styled/Background'
import StyledWrapper from './styled/StyledWrapper'
 

const Modal = ({
  open,
  onClose,
  onSchedule,
  post,
}) => {
  
  const [ date, setDate ] = useState('')
  const [ time, setTime ] = useState('')

  const scheduleDate = new Date(`${date}:${time}`)

  const sheduledPost = {
    ...post,
    postAt: scheduleDate,
  }

  return (
    <Background open={open}>
      <StyledWrapper>
        <TimePicker
          onDateSelect={setDate}
          onTimeSelect={setTime}
        />
        <ControlGroup
          post={sheduledPost}
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
  onSchedule: PropTypes.func,
  post: PropTypes.object,
}

export default Modal
