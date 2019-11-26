
import { connect } from 'react-redux'

import App from './index'

import {
  fetchPosts,
  createNewPost,
  scheduleNewPost,
} from './services/thunks'

const mapStateToProps = state => ({
  posts: state.app.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createNewPost: post => dispatch(createNewPost(post)),
  scheduleNewPost: post => dispatch(scheduleNewPost(post))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
