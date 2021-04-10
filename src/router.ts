import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';

const md = filename => h(Markdown, {path: `../Markdown/${filename}.md`, key: filename});
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md('intro')},
        {path: 'install', component: md('install')},
        {path: 'get-started', component: md('get-started')},
        {path: 'switch', component: SwitchDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'tabs', component: TabsDemo}
      ]
    }
  ]
});
router.afterEach(() => {
});