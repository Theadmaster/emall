import Vue from 'vue'
import Router from 'vue-router'

import Address from '../views/profile/address/Address.vue'
import AddressChange from '../views/profile/address/AddressChange.vue'
import Login from '../views/login/Login.vue'

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/address',
        component: Address
    },
    {
        path: '/addresschange',
        component: AddressChange
    },
    {
        path:'/login',
        component: Login
    }
]

const router = new Router({
    routes,
    mode:'history'
})

export default router