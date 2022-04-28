export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpDate: Date
  ) {}

  //getter --> user.token and u cant overwrite it (it's not a setter)
  get token() {
    if (!this._tokenExpDate || new Date() > this._tokenExpDate) {
      return null;
    }
    return this._token;
  }
}
