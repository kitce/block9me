import Vue from 'vue';
import './main.scss';
import App from './components/App/App.component';

new Vue({
  el: '#root',
  components: {
    app: App
  }
});

if (module.hot) {
  module.hot.accept();
}
