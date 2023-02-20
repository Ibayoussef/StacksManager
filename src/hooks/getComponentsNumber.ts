import { StackComponents } from "../Enums/StackComponents";

/**

Returns the number of components in the given StackComponents object.
@param {StackComponents} components - The StackComponents object to count the number of components in.
@returns {number} The number of components in the StackComponents object.
*/
export const getComponentsNumber = (components: StackComponents) => {
  return Object.keys(components).length;
};
