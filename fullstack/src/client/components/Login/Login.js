import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/login';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    props.authenticate();
    this.auth = '';
    this.fsm = {
      hasAuth: {
        false: <button onClick={props.login}> Login </button>,
        true: <button onClick={props.logout}> Logout </button>,
      },
    };
  }
  render() {
    const { hasAuth = false } = this.props;
    return this.fsm.hasAuth[hasAuth];
  }
}

const mapStateToProps = (state) => ({
  hasAuth: state.login.hasAuth,
});

const mapDispatchToProps = {
  ...actionCreators,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
