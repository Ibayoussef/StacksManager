export interface Filters {
  author: string;
  shared: boolean;
  inactive: boolean;
  created: {
    startDate: string;
    endDate: string;
  };
}
