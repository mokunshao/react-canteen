import React from 'react';
import { Switch, Route, Link, Redirect } from 'dva/router';
import styles from '../index.scss';
import Phone from './Phone';
import Addressd from './Address';

interface Props {
  match: {
    params: { method: string };
  };
  children: any;
}

export default function Contact(props: Props) {
  return (
    <div>
      <h2>联系方式</h2>
      <div className={styles.links}>
        <Link
          to="/about/contact/phone"
          className={props.match.params.method === 'phone' ? `${styles.selected}` : ''}
        >
          电话
        </Link>
        <Link
          to="/about/contact/address"
          className={props.match.params.method === 'address' ? `${styles.selected}` : ''}
        >
          地址
        </Link>
      </div>
      {props.children}
    </div>
  );
}
