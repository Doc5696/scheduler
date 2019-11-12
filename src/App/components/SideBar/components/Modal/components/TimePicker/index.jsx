import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import InputGroup from './styled/InputGroup'
import StyledLabel from './styled/StyledLabel'
import DatePicker from './styled/DatePicker'
import TimeInput from './styled/TimeInput'

const TimePicker = ({
  onDateSelect,
  onTimeSelect,
}) => {

  return (
    <StyledWrapper>
      <InputGroup>
        <StyledLabel htmlFor="date">Set date</StyledLabel>
        <DatePicker onChange={e => onDateSelect(e.target.value)} type="date" id="date" />
      </InputGroup>
      <InputGroup>
        <StyledLabel htmlFor="time">Set time</StyledLabel>
        <TimeInput onChange={e => onTimeSelect(e.target.value)} type="time" id="time" />
      </InputGroup>
    </StyledWrapper>
  )
}

TimePicker.propTypes = {
  onDateSelect: PropTypes.func,
  onTimeSelect: PropTypes.func,
}

export default TimePicker
