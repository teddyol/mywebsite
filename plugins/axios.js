// import axios from 'axios';
// import QS from 'qs';

export default function ({ $axios, redirect }) {
  // $axios.defaults.timeout = 10000;
  // $axios.defaults.headers.post['Content-Type'] = 'application/json';
  // $axios.defaults.headers.patch['Content-Type'] = 'application/json';
  // $axios.defaults.headers.put['Content-Type'] = 'application/json';

  $axios.onRequest(config => {
    // config.data = qs.stringify(config.data, {
    //   allowDots: true
    // });
    return config;
  });

  $axios.onResponse(response => {
    if (!response.data.success) {
      return Promise.reject(response.data.msg);
    } else {
      return Promise.resolve(response.data);
    }
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
    // return Promise.reject(error);
  });
}