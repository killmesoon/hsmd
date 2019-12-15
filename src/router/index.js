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

import Business from '../components/business/Business'

/**
 * 服务服务范围
 */
import ServiceRange from '../components/service/ServiceRange'

/**
 * 联系我们
 */
import ContactUs from '../components/contact/ContactUs'


/**
 * 发展历程
 */
import HsHistory from '../components/history/HsHistory'

/**
 * 新闻中心
 */
import NewsCenter from '../components/news/NewsCenter'

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
    },
    {
        path: '/business',
        component: Business
    },
    {
        path: '/serviceRange',
        component: ServiceRange
    },
    {
        path: '/contactUs',
        component: ContactUs
    },
    {
        path: '/history',
        component: HsHistory
    },
    {
        path: '/news',
        component: NewsCenter
    }
]
Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

export default router