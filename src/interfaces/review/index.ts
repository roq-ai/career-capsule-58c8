import { CollegeInterface } from 'interfaces/college';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  status: string;
  college_id?: string;
  admin_id?: string;
  created_at?: any;
  updated_at?: any;

  college?: CollegeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  college_id?: string;
  admin_id?: string;
}
