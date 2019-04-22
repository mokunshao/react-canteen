import React from 'react';
import styles from './index.css';
import { Layout } from 'antd';
import Navbar from './NavBar';

interface Props {
  location: { pathname: string };
  children: any;
}

function BasicLayout(props: Props) {
  return (
    <>
      <Layout className={styles.layout}>
        <Layout.Header className={styles.header}>
          <Navbar/>
        </Layout.Header>
        <Layout.Content className={styles.content}>{props.children}</Layout.Content>
      </Layout>
    </>
  );
}

export default BasicLayout;
