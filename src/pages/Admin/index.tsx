import React from 'react';
import { connect } from 'dva';

function Admin(props: any) {
  if (!sessionStorage.email || !sessionStorage.token) {
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
