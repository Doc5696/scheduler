import React from 'react'
import PropTypes from 'prop-types'

import PostEditor from './components/PostEditor'
import TimePicker from './components/TimePicker'

import StyledAside from './styled/StyledAside'

const SideBar = () => {
  return (
    <StyledAside>
      <PostEditor />
      <TimePicker />
    </StyledAside>
  )
}

SideBar.propTypes = {
  
}

export default SideBar
