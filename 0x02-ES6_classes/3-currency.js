/**
 * A class for currencies
 *
 */

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
 * Creates a string representation of currency
 */

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
