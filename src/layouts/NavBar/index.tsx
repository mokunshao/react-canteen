import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import styles from './index.scss';
import { Link, withRouter } from 'dva/router';
import { connect } from 'dva';

const menu = [
  {
    key: 'home',
    path: '/home',
    name: '主页',
    toggle: false,
  },
  {
    key: 'menu',
    path: '/menu',
    name: '菜单',
    toggle: false,
  },
  {
    key: 'admin',
    path: '/admin',
    name: '管理',
    toggle: false,
  },
  {
    key: 'about',
    path: '/about',
    name: '关于我们',
    toggle: false,
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
  history: { push: Function };
}

function NavBar(props: Props) {
  let logoutMenu = (
    <Menu>
      <Menu.Item key={'logout'} onClick={logout}>
        退出
      </Menu.Item>
    </Menu>
  );
  function logout({ key }: any): void {
    if (key === 'logout') {
      // LC.User.logOut();
      sessionStorage.clear();
      props.history.push('/login');
    }
  }
  function seletedKeys(): string {
    return props.location.pathname.length >= 2 ? props.location.pathname.split('/')[1] : 'home';
  }
  return (
    <nav className={styles.header}>
      <a className={styles.logo} href="#">
        ❤
      </a>
      <Menu
        className={styles['menu-left']}
        mode={'horizontal'}
        defaultSelectedKeys={['home']}
        selectedKeys={[seletedKeys()]}
      >
        {menu
          .filter(({ toggle }) => !(toggle && sessionStorage.email && sessionStorage.token))
          .map(({ key, path, name, className }) => {
            return (
              <Menu.Item key={key} className={styles[`${className}`]}>
                <Link to={path}>{name}</Link>
              </Menu.Item>
            );
          })}
        {sessionStorage.email && sessionStorage.token && (
          <Dropdown overlay={logoutMenu} className={styles.dropdown}>
            <a>
              <span>{sessionStorage.email}</span>
              <Icon className={styles.icon} type="down" />
            </a>
          </Dropdown>
        )}
      </Menu>
    </nav>
  );
}

function mapStateToProps(state: any) {
  return { state: state.global };
}

export default withRouter(connect(mapStateToProps)(NavBar));
