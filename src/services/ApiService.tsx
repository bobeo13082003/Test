import axios from './CustomizeApi'
const login = (userName: string) => {
    return axios.post('auth/login', { username: userName })
}

const getPosts = (page: number) => {
    return axios.get(`posts?page=${page}`)
}

const getTags = () => {
    return axios.get(`posts/tags`);
}

const addNewPost = (title: string, description: string, tags: object[]) => {
    return axios.post(`posts`, {
        title: title,
        description: description,
        tags: tags
    })
}

const updatePost = (id: string) => {
    return axios.patch(`posts/${id}`);
}

const deletePost = (id: string) => {
    return axios.delete(`posts/${id}`)
}

const logout = () => {
    return axios.delete(`auth/logout`)
}

const refreshToken = (refreshToken: string) => {
    return axios.post(`auth/refresh-token`, { refreshToken: refreshToken });
};

export { login, getPosts, getTags, addNewPost, updatePost, deletePost, logout, refreshToken }