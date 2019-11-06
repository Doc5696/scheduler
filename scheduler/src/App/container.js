
import { connect } from 'react-redux'

import App from './index'

import {
  fetchPosts,
  createNewPost,
} from './services/thunks'

const mapStateToProps = state => ({
  posts: state.app.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createNewPost: post => dispatch(createNewPost(post)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
