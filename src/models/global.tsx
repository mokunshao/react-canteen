import { routerRedux } from 'dva/router';

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
        email: action.payload.name,
        login: true,
      };
    },
  },
  effects: {
    *login(action: any, { call, put }: any) {
      yield put({
        type: 'signin',
        payload: action.payload,
      });
      yield put(routerRedux.push('/admin'));
    },
  },
};
