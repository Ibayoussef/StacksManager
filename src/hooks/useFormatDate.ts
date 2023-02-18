import { format } from "date-fns";
export const useFormatDate = (created: string) =>
  format(new Date(created), "dd.MM.yyyy HH:mm:ss");
