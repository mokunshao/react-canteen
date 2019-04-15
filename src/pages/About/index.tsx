import React from 'react';
import { Tabs } from 'antd';
import styles from './index.css';

export default function About() {
  return (
    <div className={styles.about}>
      <Tabs tabPosition="left" className={styles.tabs}>
        <Tabs.TabPane tab={'历史订餐'} key={'历史订餐'}>
          1
        </Tabs.TabPane>
        <Tabs.TabPane tab={'联系我们'} key={'联系我们'}>
          2
        </Tabs.TabPane>
        <Tabs.TabPane tab={'点餐文档'} key={'点餐文档'}>
          3
        </Tabs.TabPane>
        <Tabs.TabPane tab={'快递信息'} key={'快递信息'}>
          3
        </Tabs.TabPane>
      </Tabs>
      <div>
        nihao
      </div>
    </div>
  );
}
