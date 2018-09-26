import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/hello',
            component: HelloWorld
        },
        {
            path: '/detail/:sid',
            name: 'detail',
            component: ArticleDetail,
            props: true
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        debugger;
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})