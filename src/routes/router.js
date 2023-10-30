import { createRouter, createWebHistory } from 'vue-router'
import Categories from '../components/Categories.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'
import SinglePost from '../components/SinglePost.vue'


const routes = [
    {
        path: '/',
        component: Blog,
        name: 'home'
    },
    {
        path: '/categories',
        component: Categories,
        name: 'categories'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact' // Named Routing
    },
    {
        path: '/posts/:slug',
        component: SinglePost,
        name: 'singlePost'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;