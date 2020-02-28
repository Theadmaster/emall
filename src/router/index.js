import Vue from 'vue'
import Router from 'vue-router'

import Address from '../views/profile/address/Address.vue'
import AddressChange from '../views/profile/address/AddressChange.vue'

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/addresschange'
    },
    {
        path: '/address',
        component: Address
    },
    {
        path: '/addresschange',
        component: AddressChange
    }
]

const router = new Router({
    routes,
    mode:'history'
})

export default router