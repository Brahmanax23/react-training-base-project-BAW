import { makeObservable, observable, runInAction } from "mobx";

export class Reactive<T> {
  @observable private _value: T;

  constructor(initialValue: T) {
    this._value = initialValue;
    makeObservable(this);
  }

  get value(): T {
    return this._value;
  }

  set(newValue: T): void {
    runInAction(() => {
      this._value = newValue;
    });
  }
}