import { StacksState } from "./StacksState";
import { ComponentState } from "./ComponentState";
export interface AppState {
  stacks: StacksState;
  components: ComponentState;
}
