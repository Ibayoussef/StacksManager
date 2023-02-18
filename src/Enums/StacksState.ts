import { Stack } from "./Stack";
import { Filters } from "./Filters";
export interface StacksState {
  stacks: Stack[];
  searchResult: Stack[];
  filters: Filters;
  users: string[];
  searchValue: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}
