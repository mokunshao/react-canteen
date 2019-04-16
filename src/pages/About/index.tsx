import React from 'react';
import { Tabs } from 'antd';
import styles from './index.css';
import { Switch, Route, Redirect } from 'dva/router';
import History from './History';
import Contact from './Contact';
import Docs from './Docs';
import Delivery from './Delivery';

interface Props {
  history: {
    push: Function;
  };
  location: {
    pathname: string;
  };
  match: {
    params: { section: string };
  };
}

export default function About(props: Props) {
  function handleOnChange(key: string): void {
    props.history.push('/about/' + key);
  }
  return (
    <div className={styles.about}>
      <Tabs
        tabPosition="left"
        className={styles.tabs}
        onChange={handleOnChange}
        activeKey={props.match.params.section}
      >
        <Tabs.TabPane tab={'历史订餐'} key={'history'} />
        <Tabs.TabPane tab={'联系我们'} key={'contact'} />
        <Tabs.TabPane tab={'点餐文档'} key={'docs'} />
        <Tabs.TabPane tab={'快递信息'} key={'delivery'} />
      </Tabs>
      <div>
        <Switch>
          <Route path="/about/history" component={History} />
          <Route path="/about/contact/:method" component={Contact} />
          <Route path="/about/docs" component={Docs} />
          <Route path="/about/delivery" component={Delivery} />
          <Redirect to="/about/history" />
        </Switch>
      </div>
    </div>
  );
}
