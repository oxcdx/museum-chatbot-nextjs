// global.d.ts
export {};

declare global {
  interface Window {
    isScriptActive: boolean;
    passage: any;
  }
}