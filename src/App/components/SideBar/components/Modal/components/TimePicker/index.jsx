import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import InputGroup from './styled/InputGroup'
import StyledLabel from './styled/StyledLabel'
import DatePicker from './styled/DatePicker'
import TimeInput from './styled/TimeInput'

const TimePicker = () => {

  return (
    <StyledWrapper>
      <InputGroup>
        <StyledLabel htmlFor="date">Set date</StyledLabel>
        <DatePicker type="date" id="date" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="time">Set time</StyledLabel>
        <TimeInput type="time" id="time" />
      </InputGroup>
    </StyledWrapper>
  )
}

TimePicker.propTypes = {
  
}

export default TimePicker
