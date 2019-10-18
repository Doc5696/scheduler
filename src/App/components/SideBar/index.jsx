import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { inputs } from './services/constants'

import PostEditor from './components/PostEditor'
import TimePicker from './components/TimePicker'

import StyledAside from './styled/StyledAside'

const SideBar = () => {

  const [post, setPost] = useState({
    headline: '',
    body: '',
  })
  console.log("TCL: SideBar -> post", post)

  const handleChange = (key, val) => {
    setPost({
      ...post,
      [key]: val
    })
  }

  return (
    <StyledAside>
      <PostEditor
        fields={inputs}
        handleChange={handleChange}
      />
      <TimePicker />
    </StyledAside>
  )
}

SideBar.propTypes = {
  
}

export default SideBar
