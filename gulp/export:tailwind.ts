import gulp from 'gulp';
import TailwindExportConfig from 'tailwindcss-export-config';
import { scss } from './files';
import config from '../tailwind.config';

const task: gulp.TaskFunction = () => {
  const converter = new TailwindExportConfig({
    config,
    destination: scss.variables.tailwind,
    format: 'scss',
    prefix: 'tw'
  });
  return converter.writeToFile();
};

task.displayName = 'export:tailwind';

export default task;
