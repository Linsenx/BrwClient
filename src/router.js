import Vue from 'vue'
import VueRouter from 'vue-router'

//import components
import gameLoading from './components/game/loading'
import gameLogin from './components/game/login'
import gameStage from './components/game/stage/stage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'loading',
        component: gameLoading
    },
    {
        path: '/login',
        name: 'login',
        component: gameLogin
    },
    {
        path: '/stage',
        name: 'stage',
        component: gameStage
    },
]

const router = new VueRouter({
    routes,
})

export default router
