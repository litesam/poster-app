import React from 'react'
import { connect } from 'react-redux'

class PostReadPage extends React.Component {
  createMarkup = () => {
    return { __html: this.props.post.description }
  }

  render() {
    return (
      <div>
        <h1>{this.props.post.note}</h1>
        <div
          dangerouslySetInnerHTML={this.createMarkup()} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(PostReadPage)