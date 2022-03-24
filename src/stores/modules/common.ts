import { defineStore } from "pinia";
import api from '../../api'
interface Login {
    name: string;
    passWord: number;
}

export const commonStore = defineStore('common', {
    state: () => (
        {
            loginInfo: ""
        }
    ),
    getters: {
        getLoginInfo: (state) => state.loginInfo
    },
    actions: {
        // 同步
        setLoginInfo(data: any) {
            this.loginInfo = data
        },
        // 异步
        async getUserInfo(params: Login) {
            const data = await api.getUser()
            return data
        },
    }

})