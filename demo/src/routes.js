export default [{
    name: 'Counter Base 1',
    path: '/counter-0',
    component: () => import('./demo0/DemoCounter.vue'),
},{
    name: 'Counter Base 2',
    path: '/counter-1',
    component: () => import('./demo1/DemoCounter.vue'),
}]
