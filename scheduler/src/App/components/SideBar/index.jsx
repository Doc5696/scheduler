import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { inputs } from './services/constants'

import PostEditor from './components/PostEditor'
import Modal from './components/Modal'

import StyledAside from './styled/StyledAside'

const SideBar = ({
  onCreate,
}) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [post, setPost] = useState({
    headline: '',
    body: '',
  })

  const handleChange = (key, val) => {
    setPost({
      ...post,
      [key]: val
    })
  }

  const handleSave = async () => {
    await onCreate(post)
  }

  return (
    <StyledAside>
      <Modal
        open={open}
        onClose={handleClose}
      />
      <PostEditor
        fields={inputs}
        handleChange={handleChange}
        handleOpen={handleOpen}
        onCreate={handleSave}
      />
    </StyledAside>
  )
}

SideBar.propTypes = {
  onCreate: PropTypes.func,
}

export default SideBar
