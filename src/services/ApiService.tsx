import axios from './CustomizeApi'
const Login = (userName: string) => {
    return axios.post('auth/login', { username: userName })
}
export { Login }