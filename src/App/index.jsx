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
  fetchScheduledPost,
}) => {
  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])
  return (
    <StyledWrapper>
      <FeedLine
        data={posts}
        fetchScheduledPost={fetchScheduledPost}
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
  fetchScheduledPost: PropTypes.func,
}

export default App
