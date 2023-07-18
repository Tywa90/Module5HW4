// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import User from "./pages/User";
import Resource from "./pages/Resource/Resource";
import UserCreate from "./pages/User/UserCreate";
import UserUpdate from "./pages/User/UserUpdate";


// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'resources-route',
        title: 'Resources',
        path: '/resources',
        enabled: true,
        component: Resources
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource/:id',
        enabled: false,
        component: Resource
    },
    {
        key: 'userUpdate-route',
        title: 'UserUpdate',
        path: '/user/update/:id',
        enabled: false,
        component: UserUpdate
    },
    {
        key: 'userCreate-route',
        title: 'UserCreate',
        path: '/user/create',
        enabled: false,
        component: UserCreate
    },
]