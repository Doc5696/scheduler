export const GET_POSTS = "GET_POSTS"
export const CREATE_POST = "CREATE_POST"
export const UPDATE_POST = "CREATE_POST"
export const DELETE_POST = "DELETE_POST"

export const getPosts = data => ({
  type: GET_POSTS,
  data
})

export const createPost = newPost => ({
  type: CREATE_POST,
  newPost
})

export const updatePost = updatedPost => ({
  type: UPDATE_POST,
  updatedPost
})

export const deletePost = deletedPost => ({
  type: DELETE_POST,
  deletedPost
})
