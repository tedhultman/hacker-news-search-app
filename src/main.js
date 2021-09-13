import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import LandingComponent from '@views/landing.vue';

import actions from '@store/actions';
import mutations from '@store/mutations';
import state from '@store/state';

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    actions,
    mutations,
    state
});

import SearchComponent from '@views/search.vue';
import HistoryComponent from '@views/history.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component:LandingComponent
    },
    {
        path: '/Search',
        name: 'Search',
        component: SearchComponent
    },
    {
        path: '/History',
        name: 'History',
        component: HistoryComponent
    }
];

const router = new VueRouter({routes});

new Vue({
  render: h => h(LandingComponent),
  store,
  router
}).$mount('#app')
