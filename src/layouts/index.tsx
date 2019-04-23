import React, { useEffect } from 'react';
import styles from './index.css';
import { Layout } from 'antd';
import Navbar from './NavBar';
// import LC from 'leancloud-storage';

interface Props {
  location: { pathname: string };
  children: any;
}

function BasicLayout(props: Props) {
  // useEffect(() => {
  //   const APP_ID = 'x0vDpF24CaWvqROtxUFwreg2-gzGzoHsz';
  //   const APP_KEY = 'IimT78gljN4nGnEq4hCffUXw';
  //   LC.init({
  //     appId: APP_ID,
  //     appKey: APP_KEY,
  //   });
  // }, []);
  return (
    <>
      <Layout className={styles.layout}>
        <Layout.Header className={styles.header}>
          <Navbar />
        </Layout.Header>
        <Layout.Content className={styles.content}>{props.children}</Layout.Content>
      </Layout>
    </>
  );
}

export default BasicLayout;
