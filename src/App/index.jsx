import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import FeedLine from './components/FeedLine/container'
import SideBar from './components/SideBar/container'

import StyledWrapper from './styled/StyledWrapper'

const App = ({
  posts,
  fetchPosts,
  createNewPost,
  scheduleNewPost,
}) => {
  useEffect(() => {
    fetchPosts()
  }, [fetchPosts, posts.length])
  return (
    <StyledWrapper>
      <FeedLine
        data={posts}
      />
      <SideBar
        onCreate={createNewPost}
        onSchedule={scheduleNewPost}
      />
    </StyledWrapper>
  )
}

App.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
  createNewPost: PropTypes.func,
  scheduleNewPost: PropTypes.func,
}

export default App
