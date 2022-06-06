import { createRouter, createWebHistory } from 'vue-router'
import AccountDetails from '../views/AccountDetails.vue'
import IntroPage from '../views/IntroPage.vue'
import PerigonCover from '../views/PerigonCover.vue'
import PerigonLogin from '../views/PerigonLogin.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import TnC from '../views/TnC.vue'
import VerifyPage from '../views/VerifyPage.vue'
import AppHomePage from '../views/AppHomePage.vue'
import PurchasePass from '../views/PurchasePass.vue'
import PurchaseSummary from '../views/PurchaseSummary.vue'
import BookAClass from '../views/BookAClass.vue'
import SelectSpots from '../views/SelectSpots.vue'
import BookSummary from '../views/BookSummary.vue'
import PopulatedAppHomePage from '../views/PopulatedAppHomePage.vue'

const routes = [
  {
    path: '/',
    name: 'PerigonCover',
    component: PerigonCover
  },
  {
    path: '/AccountDetails',
    name: 'AccountDetails',
    component: AccountDetails,
    props: true
  },
  {
    path: '/IntroPage',
    name: 'IntroPage',
    component: IntroPage
  },
  {
    path: '/PerigonLogin',
    name: 'PerigonLogin',
    component: PerigonLogin
  },
  {
    path: '/PersonalInfo',
    name: 'PersonalInfo',
    component: PersonalInfo
  },
  {
    path: '/TnC',
    name: 'Tnc',
    component: TnC
  },
  {
    path: '/VerifyPage',
    name: 'VerifyPage',
    component: VerifyPage
  },
  {
    path: '/AppHomePage',
    name: 'AppHomePage',
    component: AppHomePage
  },
  {
    path: '/PurchasePass',
    name: 'PurchasePass',
    component: PurchasePass
  },
  {
    path: '/PurchaseSummary',
    name: 'PurchaseSummary',
    component: PurchaseSummary
  },
  {
    path: '/BookAClass',
    name: 'BookAClass',
    component: BookAClass
  },
  {
    path: '/SelectSpots',
    name: 'SelectSpots',
    component: SelectSpots
  },
  {
    path: '/BookSummary',
    name: 'BookSummary',
    component: BookSummary
  },
  {
    path: '/PopulatedAppHomePage',
    name: 'PopulatedAppHomePage',
    component: PopulatedAppHomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
