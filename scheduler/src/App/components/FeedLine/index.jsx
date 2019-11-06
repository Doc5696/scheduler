import React from 'react'
import PropTypes from 'prop-types'

import Post from './components/Post'

import StyledMain from './styled/StyledMain'

const FeedLine = ({
  data
}) => {
  return (
    <StyledMain>
      {data.map(post => (
      <Post
        key={post._id}
        headline={post.headline}
        body={post.body}
      />
      ))}
    </StyledMain>
  )
}

FeedLine.propTypes = {
  data: PropTypes.array,
}

export default FeedLine
