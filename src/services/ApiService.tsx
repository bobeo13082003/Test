import axios from './CustomizeApi'
const Login = (userName: string) => {
    return axios.post('auth/login', { username: userName })
}

const GetPosts = (page: number, title: string, tags: string) => {
    return axios.get(`posts?page=${page}&title=${title}&tags=${tags}`)
}

const GetTags = () => {
    return axios.get(`posts/tags`);
}
export { Login, GetPosts, GetTags }