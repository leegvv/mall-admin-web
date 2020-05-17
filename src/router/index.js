import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout/Layout';

Vue.use(Router);

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
      path: '404',
      component: () => import('@/views/404'),
      hidden: true
    },
    {
        path: '',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/index'),
            meta: {title: '首页', icon: 'home'}
        }]
    }
];

export const asyncRouterMap = [
    {
        path: '/ums',
        component: Layout,
        redirect: '/ums/admin',
        name: 'ums',
        meta: {title: '权限', icon: 'ums'},
        children: [
            {
                path: 'admin',
                name: 'admin',
                component: () => import('@/views/ums/admin/index'),
                meta: {title: '用户列表', icon: 'ums-admin'}
            },
            {
                path: 'role',
                name: 'role',
                component: () => import('@/views/ums/admin/index'),
                meta: {title: '角色列表', icon: 'ums-role'}
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import('@/views/ums/menu/index'),
                meta: {title: '菜单列表', icon: 'ums-menu'}
            },
            {
                path: 'resource',
                name: 'resource',
                component: () => import('@/views/ums/resource/index'),
                meta: {title: '资源列表', icon: 'ums-resource'}
            },
            {
                path: 'resourceCategory',
                name: 'resourceCategory',
                component: () => import('@/views/ums/resource/categoryList'),
                meta: {title: '资源分类'},
                hidden: true
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
});
