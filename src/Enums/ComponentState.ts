import { Component } from "./Component";

export interface ComponentState {
  components: Component[];
  filteredComponents: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}
