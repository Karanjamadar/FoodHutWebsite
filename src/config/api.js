import axios from 'axios';
import swal from 'sweetalert';

//

export const apiPublic = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiPublic.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    if (err.response) {
      if (err.response.status === 0) {
        swal({
          title: "Connectivity Error",
          text: 'please check your internet connection',
          icon: "error",
        })
      }
    }
    return Promise.reject(err);
  },
);

export const apiPrivate = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
apiPrivate.interceptors.request.use(
  async config => {
    console.log('In private request interseptor');
    const token = localStorage.getItem('token');
    config.headers['token'] = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiPrivate.interceptors.response.use(
  res => {
    console.log('In private response interseptor');
    return res;
  },
  async err => {
    if (err.response) {
      if (err.response.status === 0) {
        swal({
          title: "Connectivity error",
          text: 'please check your internet connection',
          icon: "error",
        })
      } else if (err.response.status === 401) {
        swal({
          title: 'Token expired',
          text: err?.message,
          icon: "error",
        })
      } else if (err.response.status === 500) {
        swal({
          title: 'Server error',
          text: err?.message,
          icon: "error",
        })
      }
    }
    return Promise.reject(err);
  },
);
