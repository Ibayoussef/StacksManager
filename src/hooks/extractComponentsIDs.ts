export const extractComponentsIDs = (components: any) => {
  return Object.values(components).map((component: any) => component[0]);
};
