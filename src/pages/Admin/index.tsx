import React from 'react';
import { connect } from 'dva';

interface Props {
  state: {
    login: boolean;
  };
}

function Admin(props: any) {
  if (!props.state.login) {
    props.history.push('/login');
  }
  return <div>admin</div>;
}

interface State {
  global: Object;
}

function mapStateToProps(state: State) {
  return { state: state.global };
}

export default connect(mapStateToProps)(Admin);
