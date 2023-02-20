export interface Component {
  id: string;
  created: string;
  updated: string;
  user: string;
  project: string;
  is_shared: boolean;
  name: string;
  type: string;
  flavor: string;
  configuration: {
    [key: string]: string[];
  };
}
