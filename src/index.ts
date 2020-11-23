import { App } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bem: (T: BemItem) => string[];
  }
}

interface BemOptions {
  hyphenate?: boolean;
}

interface BemItem {
  b?: string;
  e?: string;
  m?: string | string[] | {[key in string]: boolean};
}

function getClassName (b: string, e?: string, m?: string): string {
  return `${b}${e ? `__${e}` : ''}${m ? `--${m}` : ''}`;
}

function install (Vue: App, { hyphenate }: BemOptions): void {
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

export function createBem (options: BemOptions): {install: (T: App) => void} {
  return {
    install: (app: App) => install(app, options)
  };
}
