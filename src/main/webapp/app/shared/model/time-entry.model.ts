import { Moment } from 'moment';

export interface ITimeEntry {
  id?: number;
  duration?: number;
  date?: string;
  shotDescription?: string;
  description?: string;
  memberLogin?: string;
  memberId?: number;
  projectName?: string;
  projectId?: number;
}

export const defaultValue: Readonly<ITimeEntry> = {};
