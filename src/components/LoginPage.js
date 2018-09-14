import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth';

class LoginPage extends React.Component {
  startLogin = () => {
    this.props.startLogin()
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.startLogin}>Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)