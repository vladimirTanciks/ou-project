export type DumpType =
  | 'automotive'
  | 'construction'
  | 'electronic'
  | 'glass'
  | 'household'
  | 'metal';

export interface IReport {
  active: boolean;
  author: string;
  image: string;
  cleaned: boolean;
  createdAt: string;
  description: string;
  lat: number;
  lng: number;
  title: string;
  type: string;
  updatedAt: string;
}
