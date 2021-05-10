import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/main.css';

import firebase from 'firebase'
const firebaseConfig = {  
    apiKey: "AIzaSyBsyx6obn34Hd3mJfVj8Qz1w60995U6OQA",
    authDomain: "mind-vue-app.firebaseapp.com",
    projectId: "mind-vue-app",
    storageBucket: "mind-vue-app.appspot.com",
    messagingSenderId: "670476557551",
    appId: "1:670476557551:web:5601f82e23429b029d0f1a"
  };
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});