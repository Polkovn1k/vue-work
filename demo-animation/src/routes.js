export default [{
    name: 'Counter Base 1',
    path: '/counter-0',
    component: () => import('./demo0/DemoCounter.vue'),
},{
    name: 'Counter Base 2',
    path: '/counter-1',
    component: () => import('./demo1/DemoCounter.vue'),
},{
    name: 'Counter Base 4',
    path: '/counter-4',
    component: () => import('./demo4/DemoCounter.vue'),
},{
    name: 'Counter Base 5',
    path: '/counter-5',
    component: () => import('./demo5/Server.vue'),
},{
    name: 'Counter Base 6',
    path: '/counter-6',
    component: () => import('./demo6/BouncingBall.vue'),
},{
    name: 'Counter Base 7',
    path: '/counter-7',
    component: () => import('./demo6/BouncingBallJavaScript.vue'),
}]
