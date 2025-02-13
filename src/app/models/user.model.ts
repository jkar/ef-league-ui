export interface User {
  loggedIn: boolean,
  role: Role | null,
  token: string | null,
  firstName: string,
  lastName: string
}

export enum Role {
  ADMIN = 'admin',
  READER = 'reader'
}
