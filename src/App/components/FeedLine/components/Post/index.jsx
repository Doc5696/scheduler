import React from 'react'
import PropTypes from 'prop-types'

import StyledWrapper from './styled/StyledWrapper'
import StyledHeadLine from './styled/StyledHeadLine'
import StyledBody from './styled/StyledBody'

const Post = ({
  headline,
  body,
}) => {
  return (
    <StyledWrapper>
      <StyledHeadLine>{headline}</StyledHeadLine>
      <StyledBody>{body}</StyledBody>
    </StyledWrapper>
  )
}

Post.propTypes = {
  headline: PropTypes.string,
  body: PropTypes.string,
}

export default Post
