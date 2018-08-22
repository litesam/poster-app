import React from 'react'
import Remarkable from 'react-remarkable'
import { connect } from 'react-redux'

export const PostReadPage = ({ heading, description }) => (
  <div>
    <h1>{heading}</h1>
    <Remarkable source={description} />
  </div>
)

const mapStateToProps = (state) => ({
  heading: state.blog.note,
  description: state.blog.description
})

export default connect(mapStateToProps)(PostReadPage)