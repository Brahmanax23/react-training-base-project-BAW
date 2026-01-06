export default class Util {
  static delay<T>(ms: number, value?: T): Promise<T | void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), ms);
    });
  }
}
