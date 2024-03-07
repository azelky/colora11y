import { browser } from 'wxt/browser';

export default defineBackground(() => {
  console.log('🦄 Hello background!', { id: browser.runtime.id });
});
