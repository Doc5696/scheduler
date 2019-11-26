import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import InputGroup from './styled/InputGroup'
import StyledLabel from './styled/StyledLabel'
import DatePicker from './styled/DatePicker'
import TimeInput from './styled/TimeInput'

const TimePicker = ({
  handleChange,
}) => {

  return (
    <StyledWrapper>
      <InputGroup>
        <StyledLabel htmlFor="date">Set date</StyledLabel>
        <DatePicker
          type="date"
          id="date"
          onChange={e => handleChange('date', e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="time">Set time</StyledLabel>
        <TimeInput
          type="time"
          id="time"
          onChange={e => handleChange('time', e.target.value)}
        />
      </InputGroup>
    </StyledWrapper>
  )
}

TimePicker.propTypes = {
  handleChange: PropTypes.func,
}

export default TimePicker
