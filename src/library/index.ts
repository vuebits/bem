import { App } from 'vue';
import { BemOptions, BemItem } from '@/models';
import { getClassName } from './helpers';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bem: (T: BemItem) => string[];
  }
}

export function install (Vue: App, { hyphenate }: BemOptions): void {
  Vue.mixin({
    name: 'BemMixin',
    methods: {
      $bem ({ b, e, m }: BemItem): string[] {
        const pascalToKebabCase = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        const n = this.$options.name;
        const block: string = b || hyphenate ? pascalToKebabCase(n) : n;
        const modifiers: string[] = m ? (typeof m === 'string' ? [m] : (Array.isArray(m) ? m : Object.keys(m).filter(key => m[key]))) : [];
        const elementClass = getClassName(block, e);
        const modifiersClasses = modifiers.map(m => getClassName(block, e, m));
        return [elementClass, ...modifiersClasses];
      }
    }
  });
}
