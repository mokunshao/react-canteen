import React from 'react';
import { Tabs } from 'antd';
import styles from './index.css';
import { Switch, Route } from 'dva/router';
import History from './History';
import Contact from './Contact';
import Docs from './Docs';
import Delivery from './Delivery';

interface Props {
  history: {
    push: any;
  };
  location: {
    pathname: any;
  };
}

export default function About(props: Props) {
  function handleOnChange(key: string): void {
    props.history.push(key);
  }
  return (
    <div className={styles.about}>
      <Tabs
        tabPosition="left"
        className={styles.tabs}
        onChange={handleOnChange}
        activeKey={props.location.pathname}
      >
        <Tabs.TabPane tab={'历史订餐'} key={'/about/history'} />
        <Tabs.TabPane tab={'联系我们'} key={'/about/contact'} />
        <Tabs.TabPane tab={'点餐文档'} key={'/about/docs'} />
        <Tabs.TabPane tab={'快递信息'} key={'/about/delivery'} />
      </Tabs>
      <div className={styles.content}>
        <Switch>
          <Route path="/about/history" component={History} />
          <Route path="/about/contact" component={Contact} />
          <Route path="/about/docs" component={Docs} />
          <Route path="/about/delivery" component={Delivery} />
        </Switch>
      </div>
    </div>
  );
}
