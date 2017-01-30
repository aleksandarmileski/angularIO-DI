import { Injectable } from '@angular/core';

export class User {
  constructor(
    public name: string,
    public isAuthorized: boolean = false,
  ) {

  }
}

let alice = new User('Alice', true)
let bob = new User('Bob', false)


@Injectable()
export class UserService {

  user = bob

  constructor() { }

  getNewUser() {
    return this.user = this.user === bob ? alice : bob
  }

}
