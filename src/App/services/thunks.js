import axios from 'axios'

import {
  getPosts,
  createPost,
  updatePost,
  deletePost
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

