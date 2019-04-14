import React from 'react';
import { Menu } from 'antd';
import styles from './index.css';
import { Link } from 'dva/router';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.header}>
      <a className={styles.logo} href="#">
        ❤
      </a>
      <Menu className={styles['menu-left']} mode={'horizontal'} defaultSelectedKeys={['home']}>
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
          <Link to={'/user/login'}>登录</Link>
        </Menu.Item>
        <Menu.Item key={'register'} className={styles.register} style={{ position: 'absolute' }}>
          <Link to={'/user/register'}>注册</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default NavBar;
