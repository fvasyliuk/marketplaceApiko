import axios from 'axios';
import { SocketApi } from './';

const urls = {
    login: '/api/auth/login',
    register: '/api/auth/register',
    getViewer: '/api/account/user',
    productsLatest: '/api/products/latest',
    add: '/api/products',
    image: '/api/upload/images',
    products: '/api/products',
    users: '/api/users',
    chats: '/api/chats',
    saved: '/api/products/saved',
};

export const Auth = {
    _token: null,

    get isLoggedIn() {
        return !!this._token;
    },

    setToken(token) {
        this._token = token;

        this._storeToken(token);

        this._setTokenToAxios(token);
    },

    init() {
        try {
            const token = window.localStorage.getItem('token');
            this._token = JSON.parse(token);
            
            this._setTokenToAxios(this._token);
            SocketApi.init(this._token);
        } catch (err) {
            console.error(err);
        }
    },

    login(body) {
        return axios.post(urls.login, body)       
    },

    register(body) {
        return axios.post(urls.register, body)       
    },

    logout() {
        this._token = null;
        try {
            window.localStorage.removeItem('token')
        } catch (err) {
            console.error(err);
        }
        this._setTokenToAxios(null);
    },
    _storeToken() {
        try {
            window.localStorage.setItem('token', JSON.stringify(this._token));
        } catch (err) {
            console.error(err);
        } 
    },
    _setTokenToAxios(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

export const Viewer = {
    get() {
        return axios.get(urls.getViewer);
    }
};

export const Products = {
    getLatest() {
        return axios.get(urls.productsLatest)
    },
    add(body) {
        return axios.post(urls.add, body)
    },
    get(id) {
        return axios.get(`${urls.products}/${id}`)
    },
    getUserProducts(id) {
        return axios.get(`${urls.users}/${id}/products`)
    },
    save(productId) {
        return axios.post(`${urls.products}/${productId}/save`)
    },
    unsave(productId) {
        return axios.post(`${urls.products}/${productId}/unsave`)
    },
    getSaved() {
        return axios.get(urls.saved);
    }
};

export const Images = {
    upload(file) {
        const fd = new FormData();
        fd.append('image', file);
        return axios.post(urls.image, fd);
    }
}

export const Chats = {
    createChat(productId) {
        return axios.post(`${urls.products}/${productId}/createChat`)
    },
    fetch() {
        return axios.get(urls.chats);
    }
}

export const Messages = {
    sendMessage(chatId, text) {
        return axios.post(`${urls.chats}/${chatId}/messages`, { text });
    },
    fetchMessages(chatId) {
        return axios.get(`${urls.chats}/${chatId}/messages`);
    }
} 
export const Users = {
    get(id) {
        return axios.get(`${urls.users}/${id}`)
    },
}
export function init() {
    Auth.init();
};