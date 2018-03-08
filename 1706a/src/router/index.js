import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Flow from '@/components/Flow'
import Effect from '@/components/Effect'
import Details from '@/components/Details'
import Budget1 from '@/components/Budget1'
import Budget2 from '@/components/Budget2'
import Stylist1 from '@/components/Stylist1'
import Screen from '@/components/Screen'
import Live1 from '@/components/Live1'
import Live2 from '@/components/Live2'
import Stylist2 from '@/components/Stylist2'
import Project from '@/components/Project'
import Fitrment1 from '@/components/Fitrment1'
import Fitrment2 from '@/components/Fitrment2'
import Offer from '@/components/Offer'
import Loan from '@/components/Loan'
import Evaluate from '@/components/Evaluate'
import About from '@/components/About'
import Contact from '@/components/Contact'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/flow',
      name: 'Flow',
      component:Flow
    },
    {
      path: '/effect',
      name: 'Effect',
      component:Effect
    },
    {
      path: '/details',
      name: 'Details',
      component:Details
    },
    {
      path: '/budget1',
      name: 'Budget1',
      component:Budget1
    },
    {
      path: '/budget2',
      name: 'Budget2',
      component:Budget2

    },
    {
      path: '/stylist1',
      name: 'Stylist1',
      component:Stylist1
    },
    {
      path: '/screen',
      name: 'Screen',
      component:Screen
    },
    {
      path: '/live1',
      name: 'Live1',
      component:Live1

    },
    {
      path: '/live2',
      name: 'Live2',
      component:Live2
    },
    {
      path: '/stylist2',
      name: 'Stylist2',
      component:Stylist2
    },
    {
      path: '/project',
      name: 'Project',
      component:Project
    },
    {
      path: '/fitrment1',
      name: 'Fitrment1',
      component:Fitrment1
    },
    {
      path: '/fitrment2',
      name: 'Fitrment2',
      component:Fitrment2
    },
    {
      path: '/offer',
      name: 'Offer',
      component:Offer
    },
    {
      path: '/loan',
      name: 'Loan',
      component:Loan

    },
    {
      path: '/evaluate',
      name: 'Evaluate',
      component:Evaluate

    },
    {
      path: '/about',
      name: 'About',
      component:About
    },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact
    }
  ]
})
