import React from 'react'
import PropTypes from 'prop-types'

import FeedLine from './components/FeedLine/container'
import SideBar from './components/SideBar/container'

import StyledWrapper from './styled/StyledWrapper'

const App = () => {
  return (
    <StyledWrapper>
      <FeedLine />
      <SideBar />
    </StyledWrapper>
  )
}

App.propTypes = {
  
}

export default App
