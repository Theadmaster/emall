import Vue from 'vue'
import Router from 'vue-router'


const AddressList = () => import('views/profile/address/AddressList.vue')
const Address = () => import('views/profile/address/Address.vue')
const AddressChange = () => import('views/profile/address/AddressChange.vue')

const Login = () => import('../views/login/Login.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/addresslist'
    },
    {
        path: '/address/:b_s_id',
        component: Address
    },
    {
        path: '/addresschange/:address_id',
        component: AddressChange
    },
    {
        path: '/addresslist',
        component: AddressList
    },
    {
        path:'/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new Router({
    routes,
    mode:'history'
})

export default router