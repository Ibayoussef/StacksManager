import { Component } from "./Component";

export interface ComponentState {
  components: Component[];
  filteredComponents: Component[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}
