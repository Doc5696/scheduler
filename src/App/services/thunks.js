import axios from 'axios'
import socketIOClient from 'socket.io-client'

import {
  getPosts,
  createPost,
  // updatePost,
  // deletePost
} from './actions'

const baseUrl = 'http://localhost:8000/api'

export const fetchPosts = () => dispatch => {
  const endPoint = `${baseUrl}/posts`
  axios.get(endPoint)
    .then(res => {
      const posts = res.data
      dispatch(getPosts(posts))
    })
}

export const fetchScheduledPost = () => dispatch => {
  const socket = socketIOClient('localhost:8000')
  socket.on('newPost', (post) => {
    dispatch(createPost(post))
  })
}

export const createNewPost = post => dispatch => {
  const endPoint = `${baseUrl}/posts`
  axios.post(endPoint, post)
    .then(res => {
      const newPost = res.data
      dispatch(createPost(newPost))
    })
}

export const scheduleNewPost = post => dispatch => {
  const endPoint = `${baseUrl}/schedule_posts`
  axios.post(endPoint, post)
}

