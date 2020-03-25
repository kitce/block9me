import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import * as blockies from '../../third-party/blockies';

import { IBlocky } from '../../helpers/blocky';

import template from './Blocky.template.html';
import styles from './Blocky.styles.scss';

type Refs = {
  canvas: HTMLCanvasElement;
};

@Component({ template })
export default class Blocky extends Vue implements IBlocky {
  private styles = styles;
  $refs!: Refs;

  @Prop(String) readonly seed?: string;
  @Prop(String) readonly color?: string;
  @Prop(String) readonly backgroundColor?: string;
  @Prop(String) readonly spotColor?: string;
  @Prop(Number) readonly size?: number;
  @Prop(Number) readonly scale?: number;

  private get options () {
    const { seed, color, backgroundColor, spotColor, size, scale } = this;
    return { seed, color, bgcolor: backgroundColor, spotcolor: spotColor, size, scale };
  }

  @Watch('seed')
  @Watch('color')
  @Watch('backgroundColor')
  @Watch('spotColor')
  @Watch('size')
  @Watch('scale')
  private renderIcon () {
    const { options } = this;
    const { canvas } = this.$refs;
    blockies.render(options, canvas);
  }

  mounted () {
    this.renderIcon();
  }
}
