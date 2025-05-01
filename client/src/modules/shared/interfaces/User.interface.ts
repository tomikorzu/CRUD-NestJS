import { Roles } from "../types/Roles.enum";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Roles;
  createdAt: Date;
}
