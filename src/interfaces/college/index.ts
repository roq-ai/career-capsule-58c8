import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CollegeInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  admin_id?: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    review?: number;
  };
}

export interface CollegeGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  admin_id?: string;
}
