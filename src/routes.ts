// pages
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import User from "./pages/User";
import Resource from "./pages/Resource/Resource";
import UserCreate from "./pages/User/UserCreate";
import UserUpdate from "./pages/User/UserUpdate/UserUpdate";


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
        title: 'Users',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'userUpdate-route',
        title: 'UserUpdate',
        path: `/user/update/:id/:firstName/:lastName`,
        enabled: false,
        component: UserUpdate
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
        key: 'userCreate-route',
        title: 'UserCreate',
        path: '/user/create',
        enabled: false,
        component: UserCreate
    },
]