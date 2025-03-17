// Polyfill para Array.prototype.myMap
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function <T, U>(callback: (value: T, index: number, array: T[]) => U): U[] {
        const result: U[] = [];
        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));
        }
        return result;
    };
  }
  
  // Polyfill para Array.prototype.myFilter
  if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function <T>(callback: (value: T, index: number, array: T[]) => boolean): T[] {
        const result: T[] = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };
  }
  