import Api from './Api'

export const authservices = {
  register:function register (credentials) {
    return Api().post('register', credentials)
  },
  login:function login (credentials) {
    return Api().post('login', credentials)
  }

}
