import random from 'lodash/random';
import randomColor from 'randomcolor';
import lipsum from 'simple-lipsum';

export interface IBlocky {
  seed?: string;
  color?: string;
  backgroundColor?: string;
  spotColor?: string;
  size?: number;
  scale?: number;
}

export const getRandomOptions = (): IBlocky => {
  return {
    seed: lipsum.getSentence(5),
    color: randomColor(),
    backgroundColor: randomColor(),
    spotColor: randomColor(),
    size: random(10, 20),
    scale: random(5, 10)
  };
};
