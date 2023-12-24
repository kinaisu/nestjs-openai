import { Role } from '../enum/roles.enum';

export class Message {
  role: Role;
  content: string;
  name?: string;
}
