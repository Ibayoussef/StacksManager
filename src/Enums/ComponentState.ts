import { Component } from "./Component";

export interface ComponentState {
  components: Component[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}
