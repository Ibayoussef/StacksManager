import { Stack } from "./Stack";

export interface StacksState {
  stacks: Stack[];
  searchResult: Stack[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}
