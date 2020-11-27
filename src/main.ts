import { createApp } from 'vue';
import App from './App.vue';
import { createBem } from '@/index';

createApp(App).use(createBem({ hyphenate: true })).mount('#app');
