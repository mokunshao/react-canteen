import React, { useEffect } from 'react';
import { Menu } from 'antd';
import styles from './index.css';
import { Link } from 'dva/router';
import { connect } from 'dva';

interface Props {
  location: { pathname: string };
  state: { email: string; login: boolean };
}

function NavBar(props: Props) {
  function seletedKeys(): string {
    return props.location.pathname.length >= 2 ? props.location.pathname.split('/')[1] : 'home';
  }
  return (
    <nav className={styles.header}>
      <a className={styles.logo} href="#">
        ❤{props.state.login.toString()}
        {props.state.email}
      </a>
      <Menu
        className={styles['menu-left']}
        mode={'horizontal'}
        defaultSelectedKeys={['home']}
        selectedKeys={[seletedKeys()]}
      >
        <Menu.Item key={'home'}>
          <Link to={'/home'}>主页</Link>
        </Menu.Item>
        <Menu.Item key={'menu'}>
          <Link to={'/menu'}>菜单</Link>
        </Menu.Item>
        <Menu.Item key={'admin'}>
          <Link to={'/admin'}>管理</Link>
        </Menu.Item>
        <Menu.Item key={'about'}>
          <Link to={'/about'}>关于我们</Link>
        </Menu.Item>
        <Menu.Item key={'login'} className={styles.login} style={{ position: 'absolute' }}>
          <Link to={'/login'}>登录</Link>
        </Menu.Item>
        <Menu.Item key={'register'} className={styles.register} style={{ position: 'absolute' }}>
          <Link to={'/register'}>注册</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}

function mapStateToProps(state: any) {
  return { state: state.global };
}

export default connect(mapStateToProps)(NavBar);
