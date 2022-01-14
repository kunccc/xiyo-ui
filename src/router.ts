import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/Demos/SwitchDemo.vue';
import DialogDemo from './components/Demos/DialogDemo.vue';
import ButtonDemo from './components/Demos/ButtonDemo.vue';
import TabsDemo from './components/Demos/TabsDemo.vue';
import CollapseDemo from './components/demos/CollapseDemo.vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import getStarted from './markdown/get-started.md';
import {h} from 'vue';

const md = string => h(Markdown, {content: string, key: string});
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'install', component: md(install)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'switch', component: SwitchDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'collapse', component: CollapseDemo}
      ]
    }
  ]
});
router.afterEach(() => {
});