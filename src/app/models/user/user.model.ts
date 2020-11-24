import {Role} from '../role/role.model';

export class User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: Array<Role>;
  enabled: boolean;
  accountNonLocked: boolean;


  constructor(
    id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    roles: Array<Role>,
    enabled: boolean,
    accountNonLocked: boolean) {

    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
    this.enabled = enabled;
    this.accountNonLocked = accountNonLocked;
  }
}
