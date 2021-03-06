import React from 'react'
import PropTypes from 'prop-types'

import InputGroup from './components/InputGroup'
import ControlGroup from './components/ControlGroup'

import StyledWrapper from './styled/StyledWrapper'

const PostEditor = ({
  fields,
  handleChange,
  handleOpen,
  onCreate,
  post,
}) => {
  return (
    <StyledWrapper>
      {fields.map(field => (
        <InputGroup
          key={field.key}
          id={field.key}
          label={field.label}
          placeholder={field.placeholder}
          onChange={handleChange}
          inputType={field.inputType}
          post={post}
        />
      ))}
      <ControlGroup
        onCreate={onCreate}
        handleOpen={handleOpen}
      />
    </StyledWrapper>
  )
}

PostEditor.propTypes = {
  fields: PropTypes.array,
  handleChange: PropTypes.func,
  handleOpen: PropTypes.func,
  onCreate: PropTypes.func,
  post: PropTypes.object,
}

export default PostEditor
