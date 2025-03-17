// src/global.d.ts
export {}; // Asegura que el archivo sea tratado como un módulo

declare global {
  interface Array<T> {
    myMap<U>(callback: (value: T, index: number, array: T[]) => U): U[];
    myFilter(callback: (value: T, index: number, array: T[]) => boolean): T[];
  }
}
