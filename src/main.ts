import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Hee from './components/Hee.vue';
import Hee2 from './components/Hee2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Hee
    },
    {
      path: '/xxx',
      component: Hee2
    }
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');