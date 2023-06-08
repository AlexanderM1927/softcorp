
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/projects',
    component: () => import('layouts/SecondLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Projects.vue') }
    ],
    props: { modalOpen: false }
  },
  {
    path: '/services',
    component: () => import('layouts/SecondLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Services.vue') }
    ],
    props: { modalOpen: false }
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
