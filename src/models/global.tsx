import { routerRedux } from 'dva/router';

export default {
  namespace: 'global',
  state: {
    email: '',
    login: false,
  },
  reducers: {
    // setText(state: any) {
    //   return {
    //     ...state,
    //     text: 'setted dva',
    //   };
    // },
    signin(state: any, payload: any) {
      return {
        ...state,
        email: payload.email,
        login: true,
      };
    },
  },
  effects: {
    *login(action: any, { call, put }: any) {
      yield put({
        type: 'signin',
      });
      yield put(routerRedux.push('/admin'));
    },
    // *throwError() {
    //   throw new Error('hi error');
    //   return null;
    // },
  },
};
