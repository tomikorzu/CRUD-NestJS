import { Roles } from "../utils/constants.utils";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Roles;
  createdAt: Date;
}
