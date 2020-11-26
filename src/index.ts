import { App } from 'vue';
import { BemOptions } from '@/models';
import { install } from './plugin';

export function createBem (options: BemOptions): {install: (T: App) => void} {
  return {
    install: (app: App) => install(app, options)
  };
}
