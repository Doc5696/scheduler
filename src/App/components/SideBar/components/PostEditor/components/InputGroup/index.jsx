import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import StyledLabel from './styled/StyledLabel'
import StyledInput from './styled/StyledInput'
import StyledTextArea from './styled/StyledTextArea'

const InputGroup = ({
  id,
  label,
  placeholder,
  onChange,
  inputType,
}) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={id}>
        {label}
      </StyledLabel>
      {inputType === 'textArea'
        ? (
          <StyledTextArea
            id={id}
            placeholder={placeholder}
            onChange={e => onChange(id, e.target.value)}
          />
        ) : (
          <StyledInput
            id={id}
            placeholder={placeholder}
            onChange={e => onChange(id, e.target.value)}
          />
        )
      }
      
    </StyledWrapper>
  )
}

InputGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputType: PropTypes.string,
}

export default InputGroup
