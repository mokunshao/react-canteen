import React from 'react';
import { Menu } from 'antd';
import styles from './index.scss';
import { Link } from 'dva/router';
import { connect } from 'dva';

const menu = [
  {
    key: 'home',
    path: '/home',
    name: '主页',
  },
  {
    key: 'menu',
    path: '/menu',
    name: '菜单',
  },
  {
    key: 'admin',
    path: '/admin',
    name: '管理',
  },
  {
    key: 'about',
    path: '/about',
    name: '关于我们',
  },
  {
    key: 'login',
    path: '/login',
    name: '登录',
    className: 'login',
    toggle: true,
  },
  {
    key: 'register',
    path: '/register',
    name: '注册',
    className: 'register',
    toggle: true,
  },
];

interface Props {
  location: { pathname: string };
  state: { email: string };
}

function NavBar(props: Props) {
  function seletedKeys(): string {
    return props.location.pathname.length >= 2 ? props.location.pathname.split('/')[1] : 'home';
  }
  return (
    <nav className={styles.header}>
      <a className={styles.logo} href="#">
        ❤{props.state.email}
      </a>
      <Menu
        className={styles['menu-left']}
        mode={'horizontal'}
        defaultSelectedKeys={['home']}
        selectedKeys={[seletedKeys()]}
      >
        {menu.map(({key, path, name,className,toggle}) => {
         return <Menu.Item key={key} className={styles[`${className}`]}>
            <Link to={path}>{name}</Link>
          </Menu.Item>
        })}
        {/* <Menu.Item key={'home'}>
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
        </Menu.Item> */}
      </Menu>
    </nav>
  );
}

function mapStateToProps(state: any) {
  return { state: state.global };
}

export default connect(mapStateToProps)(NavBar);
