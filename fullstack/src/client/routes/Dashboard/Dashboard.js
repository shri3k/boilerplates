import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/dashboard';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoVal: props.currentVal,
    };
  }

  handleChange(e) {
    const val = e.target.value;
    this.setState({
      todoVal: val,
    });
  }

  submit(e) {
    const { add } = this.props;
    const { todoVal } = this.state;
    e.preventDefault();
    add(todoVal);
  }

  render() {
    const { lists } = this.props;
    const { todoVal } = this.state;
    const lis = lists.map((l, i) => <li k={i}>{l}</li>);
    return (
      <div>
        <form onSubmit={e => this.submit(e)}>
          <input type="text" onChange={e => this.handleChange(e)} value={todoVal} />
          <input type="submit" />
        </form>
        <ul>{lis}</ul>
      </div>
    );
  }
}

Dashboard.propTypes = {
  currentVal: PropTypes.string,
  add: PropTypes.func,
  lists: PropTypes.shape([]),
};

const mapStateToProps = state => ({
  currentVal: state.todo,
  lists: state.todo.lists,
});

const mapDispatchToProps = {
  ...actionCreators,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
