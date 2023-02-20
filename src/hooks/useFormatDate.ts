import { format, isValid } from "date-fns";
/**

Returns a formatted date string based on the provided date string.
@param {string} created - The date string to be formatted.
@returns {string} A formatted date string in the format "dd.MM.yyyy HH:mm:ss".
*/
export const useFormatDate = (created: string) =>
  isValid(new Date(created))
    ? format(new Date(created), "dd.MM.yyyy HH:mm:ss")
    : "";
