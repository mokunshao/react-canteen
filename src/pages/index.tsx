import React from 'react';
import styles from './index.css';
import { Redirect } from 'dva/router';

export default function() {
  return (
    <>
      <Redirect to={'/home'} />
    </>
  );
}
