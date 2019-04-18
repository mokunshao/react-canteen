import { routerRedux } from 'dva/router';
import AV from '@/utilities/Leancloud';
import { message } from 'antd';

export default {
  namespace: 'global',
  state: {
    email: 'dd',
    login: false,
  },
  reducers: {
    signin(state: any, action: any) {
      return {
        ...state,
        email: action.payload.email,
        login: true,
      };
    },
  },
  effects: {
    *login(action: any, { call, put }: any) {
      const { email, password } = action.payload;
      try {
        const result = yield call(AV.User.logIn, email, password);
        yield put({
          type: 'signin',
          payload: { email: result.attributes.username },
        });
        sessionStorage.setItem('email', result.attributes.username);
        yield put(routerRedux.push('/admin'));
      } catch {
        message.error('邮箱或密码错误, 请重新输入');
      }
    },
  },
};
