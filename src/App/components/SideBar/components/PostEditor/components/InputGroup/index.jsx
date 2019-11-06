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
  post,
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
            value={post.body}
          />
        ) : (
          <StyledInput
            id={id}
            placeholder={placeholder}
            onChange={e => onChange(id, e.target.value)}
            value={post.headline}
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
  post: PropTypes.object,
}

export default InputGroup
