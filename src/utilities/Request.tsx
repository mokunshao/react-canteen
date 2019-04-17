import axios from 'axios';

export default function Request(url: string, params: Object) {
  return axios({
    baseURL: 'https://wd4565587092snmqvb.wilddogio.com/',
    url,
    method: 'get',
    ...params,
  });
}
