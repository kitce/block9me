import Vue from 'vue';
import Component from 'vue-class-component';
import Blocky from '../Blocky/Blocky.component';
import Form from '../Form/Form.component';

import { IBlocky } from '../../helpers/blocky';

import layout from '../../stylesheets/shared/layout.scss';

import template from './App.template.html';
import styles from './App.styles.scss';

@Component({
  template,
  components: {
    'block9me-blocky': Blocky,
    'block9me-form': Form
  }
})
export default class App extends Vue {
  private layout = layout;
  private styles = styles;

  private options: IBlocky | null = null;

  private handleSubmit (options: IBlocky) {
    this.options = options;
  }
}
