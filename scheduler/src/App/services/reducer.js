import {
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
} from './actions'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: [ ...action.data ]
      }
    }
    case CREATE_POST: {
      return {
        ...state,
        posts: [ ...state.posts, action.newPost ]
      }
    }
    case UPDATE_POST: {
      const newPosts = [ ...state.posts ]
      newPosts[
        newPosts.findIndex(el => el._id === action.updatedPost._id)
      ] = action.updatedPost
      return {
        ...state,
        posts: [ ...newPosts ]
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: [
          ...state.posts.filter(el => el._id !== action.deletedPost)
        ]
      }
    }
    default:
      return state
  }
}
