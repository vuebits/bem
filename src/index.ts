import { App } from 'vue';
import { BemOptions } from '@/models';
import { install } from './library';

export function createBem (options: BemOptions): {install: (T: App) => void} {
  return {
    install: (app: App): void => install(app, options)
  };
}
