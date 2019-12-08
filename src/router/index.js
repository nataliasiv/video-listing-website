import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import AllListings from '@/views/AllListings.vue'
import Search from '@/views/Search.vue'
import ListingDetails from '@/views/ListingDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/all-listings',
    name: 'all-listings',
    component: AllListings
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/film-details/:id",
    name: "listing-details",
    component: ListingDetails,
    params: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
