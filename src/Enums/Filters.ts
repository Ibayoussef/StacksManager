export interface Filters {
  author: string;
  shared: boolean;
  inactive: boolean;
  created: {
    startDate: Date | number | string;
    endDate: Date | number | string;
  };
}
