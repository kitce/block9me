import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import template from './App.template.html';
import styles from './App.styles.scss';

@Component({ template })
export default class App extends Vue {
  private styles = styles;

  @Prop(String) readonly message?: string;
}
