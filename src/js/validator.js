export default class Validator {
  validateUsername(name) {
    this.name = name;
    return (/^[a-z][a-z\d\-_]+[a-z]$/i.test(this.name)) && (!/\d{4}/.test(this.name));
  }
}
