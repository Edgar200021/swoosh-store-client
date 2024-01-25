import { UserRoles } from "./enums"

export interface User {
  id: string
  email: string
  role: UserRoles[]
  avatar?: string
  name?: string
}


export interface EditUserRequest extends Partial<Pick<User, 'name' | 'email'>> {
  avatar?: File
}