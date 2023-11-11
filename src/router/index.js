import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';



const routes = [
    {
        path:'/',
        component:HelloWorld,
        name: "x"
    },
    {
        path: '/signup',
        component:SignUp,
        name: 'signup'
    },
    {
        path: '/login',
        component:LogIn,
        name: 'login'
    },
]

const router = createRouter ({
     history: createWebHistory(),
     routes
})

export default router;