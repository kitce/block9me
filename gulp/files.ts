export const ts = {
  src: ['src/**/*.ts'],
  dts: ['src/**/*.d.ts']
};

export const js = {
  src: ['src/**/*.js'],
  dist: ['dist/*.js']
};

export const scss = {
  src: ['src/**/*.scss', '!src/**/_*.scss', '!src/main.scss'],
  dts: ['src/**/*.scss.d.ts'],
  variables: {
    tailwind: 'src/stylesheets/variables/_tailwind'
  }
};

export const css = {
  src: ['src/**/*.css'],
  dts: ['src/**/*.css.d.ts'],
  dist: ['dist/*.css']
};

export const dist = {
  dir: ['dist']
};
