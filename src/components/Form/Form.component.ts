import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit } from 'vue-property-decorator';

import { IBlocky, getRandomOptions } from '../../helpers/blocky';

import template from './Form.template.html';
import styles from './Form.styles.scss';

@Component({ template })
export default class Form extends Vue {
  private styles = styles;

  private options: IBlocky = getRandomOptions();

  private random () {
    const options = getRandomOptions();
    for (const prop in options) {
      this.options[prop] = options[prop];
    }
    this.submit();
  }

  @Emit()
  private submit () {
    const { options } = this;
    return { ...options };
  }

  private created () {
    this.submit();
  }
}
