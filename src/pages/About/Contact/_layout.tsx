import React from 'react';
import { Link } from 'dva/router';
import styles from '../index.scss';

interface Props {
  match: {
    params: { method: string };
  };
  children: any;
  location: { pathname: string };
}

export default function Contact(props: Props) {
  return (
    <div>
      <h2>联系方式</h2>
      <div className={styles.links}>
        <Link
          to="/about/contact/phone"
          className={props.location.pathname.split('/')[3] === 'phone' ? `${styles.selected}` : ''}
        >
          电话
        </Link>
        <Link
          to="/about/contact/address"
          className={
            props.location.pathname.split('/')[3] === 'address' ? `${styles.selected}` : ''
          }
        >
          地址
        </Link>
      </div>
      {props.children}
    </div>
  );
}
