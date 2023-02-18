import { Stack } from "./Stack";

export interface StacksState {
  stacks: Stack[];
  searchResult: Stack[];
  searchValue: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}
