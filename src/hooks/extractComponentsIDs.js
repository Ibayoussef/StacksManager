/**

Extracts the IDs of components from an object with a keys that represent component types and values that represent component IDs.
@param {StackComponents} components - An object with a keys that represent component types and values that represent component IDs.
@returns {string[]} An array of component IDs extracted from the object.
*/
export const extractComponentsIDs = (components) => {
    return Object.values(components).map((component) => component[0]);
};
