import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home'
import Microsite from './views/Microsite'
import SearchUnit from './views/SearchUnit'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/css/styles.min.css'


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/site/:id',
        name: 'site',
        component: Microsite
    },
    {
        path: '/model/:id',
        name: 'model',
        component: SearchUnit,
        props: true
    },

    {
        path: '/model/',
        name: 'model',
        component: SearchUnit
    },

    {
        path: '/brand/:id',
        name: 'brand',
        component: SearchUnit
    },

    {
        path: '/body/:id',
        name: 'body',
        component: SearchUnit
    },
     

    { 
        path: '*', 
        component: Home
       }
]

const router = new VueRouter({
    routes,
    base: '/gateway'
})

new Vue({
    el: "#app",
    router: router,
    render: h=>h(App)
}).$mount('#app');