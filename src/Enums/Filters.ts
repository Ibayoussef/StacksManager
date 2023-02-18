export interface Filters {
  author: string;
  shared: boolean;
  inactive: boolean;
  created: {
    startDate: Date | string;
    endDate: Date | string;
  };
}
