import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../components/dashboard/DashBoard'
import ServiceItem from '../components/service/ServiceItem'
import Product from '../components/product/Product'
import ProductOne from '../components/product/productItme/ProductOne'
import ProductTwo from '../components/product/productItme/ProductTwo'
import ProductThree from '../components/product/productItme/ProductThree'
import ProductFour from '../components/product/productItme/ProductFour'
import ProductFive from '../components/product/productItme/ProductFive'
import ProductSix from '../components/product/productItme/ProductSix'

/**
 * 定义路由
 * @type {{path: string, component: {name}}[]}
 */
const routes = [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        component: DashBoard
    },
    {
        path: '/service',
        component: ServiceItem
    },
    {
        path: '/product',
        component: Product,
        redirect: '/product/h6',
        children: [
            {
                path: '/product/h6',
                component: ProductOne
            },
            {
                path: '/product/hy',
                component: ProductTwo
            },
            {
                path: '/product/yd',
                component: ProductThree
            },
            {
                path: '/product/wg',
                component: ProductFour
            },
            {
                path: '/product/gq',
                component: ProductFive
            },
            {
                path: '/product/yj',
                component: ProductSix
            },
        ]
    }
]
Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

export default router