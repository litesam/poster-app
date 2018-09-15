import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { startLogin } from '../actions/auth';

class LoginPage extends React.Component {
  startLogin = () => {
    this.props.startLogin()
  }

  render() {
    return (
      <div>
        <Button 
          variant="contained" 
          type="button" 
          color="primary"
          onClick={this.startLogin}
        >
          Login
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)