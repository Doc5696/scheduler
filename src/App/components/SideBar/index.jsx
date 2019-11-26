import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { inputs } from './services/constants'

import PostEditor from './components/PostEditor'
import Modal from './components/Modal'

import StyledAside from './styled/StyledAside'

const SideBar = ({
  onCreate,
  onSchedule,
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

  const setEmptyPost = () => {
    setPost({
      headline: '',
      body: '',
    })
  }

  const handleSave = async () => {
    await onCreate(post)
    setEmptyPost()
  }

  const handleSchedule = async () => {
    await onSchedule(post)
    setEmptyPost()
    handleClose()
  }

  return (
    <StyledAside>
      <Modal
        open={open}
        onClose={handleClose}
        handleChange={handleChange}
        onSchedule={handleSchedule}
      />
      <PostEditor
        fields={inputs}
        handleChange={handleChange}
        handleOpen={handleOpen}
        onCreate={handleSave}
        post={post}
      />
    </StyledAside>
  )
}

SideBar.propTypes = {
  onCreate: PropTypes.func,
  onSchedule: PropTypes.func,
}

export default SideBar
