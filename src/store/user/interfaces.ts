import { UserRoles } from "./enums"

export interface User {
  id: string
  emaiL: string
  roles: UserRoles[]
}
