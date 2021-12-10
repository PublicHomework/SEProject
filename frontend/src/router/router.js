import { createRouter,createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/gamecenter'
    },
    {
        path: "/login",
        name: "Login",
        component:  () => import('../views/login/Login.vue'),
    },
    {
        path: "/signup",
        name: "SignUp",
        component:  () => import('../views/login/SignUp.vue'),
    },
    {
        path: "/gamecenter",
        name: "Game Center",
        component: () => import('../views/game-center/GameCenter.vue'),
    },
    {
        path: "/games/:gameName",
        name: "Games",
        component: () => import('../views/game/Game.vue'),
        // children: [
        //     { path: 'battle', component: () => import('../components/games/battle/Battle.vue')},
        //     { path: 'gomoku', component: () => import('../components/games/Gomoku/Gomoku.vue')}
        // ]
    },
    {
        path: "/match/:gameName",
        name: 'match',
        component: () => import('../components/games/Games.vue')
    },
    {
        path: "/profile/:item?",
        name: "Profile",
        component: () => import('../views/profile/Profile.vue')
    }
    // {
    //     path: "/test",
    //     name: "test",
    //     component:  () => import('../views/Test.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
