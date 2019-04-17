import React from 'react';
import { Switch, Route, Link, Redirect } from 'dva/router';
import styles from './index.scss';

function Phone() {
  return <div>客服热线：400400400</div>;
}

function Address() {
  return <div>店铺地址：天河路三三街馒头大厦45楼</div>;
}

interface Props {
  match: {
    params: { method: string };
  };
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
      <Switch>
        <Route path="/about/contact/phone" component={Phone} />
        <Route path="/about/contact/address" component={Address} />
        <Redirect to="/about/contact/phone" />
      </Switch>
    </div>
  );
}
