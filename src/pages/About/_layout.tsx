import React from 'react';
import { Tabs } from 'antd';
import styles from './index.scss';


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
  children: any;
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
        activeKey={props.location.pathname.split('/')[2]}
        defaultActiveKey={'history'}
      >
        <Tabs.TabPane tab={'历史订餐'} key={'history'} />
        <Tabs.TabPane tab={'联系我们'} key={'contact'} />
        <Tabs.TabPane tab={'点餐文档'} key={'docs'} />
        <Tabs.TabPane tab={'快递信息'} key={'delivery'} />
      </Tabs>
      <div>
        {props.children}
      </div>
    </div>
  );
}
