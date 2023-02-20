# My Stack Manager

My Stack Manager is a web application that allows users to view stacks and their components.

# Thoughts

## UI/UX

- The first thing thing that comes to mind that it's going to be a devops tool created mainly for developers as users.

- There should be a clear UI showing the key information about each stack with the ability to search/filter/sort them for
  easy navigation also a pagination that is triggered once we have many stacks because pagination works better on websites where users are looking
  for specific pieces of content. Whereas infinite scroll is better suited for websites where you want users to discover
  and explore the content available.

- There should be a space where the user can access each stack's details also the component's details.

- Wanted a clear UI showing everything in one page so i proceeded to consider that each stack is a dropdown once opened, i will get the stack details
  and it's components details.

- Grouping the search and filtering in one place called toolbar since they server kind of a similar purpose:
  Name of the stack and the ID are searchable values so i'm including them in the search functionality
  is_shared/user/dates are limited values that depends of the stacks data so i'm including them in the filtering functionality?

- added the create stack button in case the api integrated a `post` method endpoint to the toolbar since it's manipulating our stacks list and it will be adding
  data to it but also since we don't have the endpoint yet, i had to let the user know by adding a toast message informing the user about the situation.

- Chose Roboto font family since sans-serif fonts are formal clear and more readable and divided the app into bold and regular fonts.

- For Colors just used a color palette to match the ZenML brand.

- Now for the Stack dropdown what should i display in it to keep it clean i asked myself "what would the user need from the stack before opening the dropdown?"
  key information to include in the dropdown header would be Name, is_shared, number of components then an arrow that lets the user open it
  once opened i'll show all the stack information on the right side of the dropdown neat and clear with a delete button under it in case the api integrated `delete`
  endpoint, and of course i'm letting the user know that the functionality is still not available with a toast message
  and to the left a grid of components but how can i should all the information about the components in that tight space?

- The handle that problem i came up with making the grid scrollable and includes cards containing all the information about each
  component but the configuration won't fit in.

- Since my users are developers and they just need to copy that configuration and use it elsewhere i just added a copy button at the end of the card
  that lets the user copy the component configuration as json.

## Dev

- First i chose Vite over CRA due to it's performance and compiling speed.

- my project structure divided the app into reusable components each component's folder includes it's css / documentation markdown / test file / tsx
- grouped all the images and icons in the assets folder.

- used `@redux/toolkit` with `react-redux` to make it easier for me to manage the app states/ redux slices are grouped in the slices folder with each slice's test.

- created custom hooks for the functions that i'm going to reuse and grouped them in the hooks folder with their tests.

- grouped interfaces that i would reuse in the Enums folder.

- styles folder includes the `index.scss` mainly it imports the styles of all components.

- considered using `styleguidist`to generate a documentation server for the components that gets generated from the markdowns since it doesn't work with vite
  i had to add webpack/babel and some loaders.

```bash
src/
├─ components/
│  ├─ TestComponent/
│  │  ├─ **/\*.scss
│  │  ├─ **/\*.tsx
│  │  ├─ **/\*.md
│  │  ├─ **/\*.test.js
│  ├─ assets/
│  │  ├─ image/icons
│  ├─ styles/
│  │  ├─ **/\*.scss
│  ├─ enums/
│  │  ├─ **/\*.ts
│  ├─ slices/
│  │  ├─ **/\*.test.js
│  │  ├─ **/\*.ts
│  ├─ hooks/
│  │  ├─ tests/
│  │  │  ├─ **/\*.test.js
│  │  ├─ **/\*.ts
```

## Features

- View a list of recently updated stacks
- Search, filter, and sort the list of stacks
- View details of a stack, including its name, description, and components
- View details of a component within a stack, including its name, type and flavor
- Ability to copy the configuration of a component in json format

## User Flow

The following is a basic user flow for the My Stack Manager application:

1.  Landing page: When the user first opens the application, they are taken to a landing page that displays a list of the most recently updated stacks, along with options to search, filter, and sort the list.

2.  Viewing stacks: The user can click on a stack dropdown arrow to view more details about it, such as its name, description, and components. From this section, the user can also delete the stack, or view the details of the components within the stack.

3.  Viewing components: To view the details of a component within a stack, the user clicks on the stack dropdown, which open a grid displaying the component details, such as its name, type and flavor also the configuration can be copied smoothly in json format.

## Deployed version

[Link text Here](https://stacks-manager.vercel.app)

## Getting Started

To run the application, you will need to have the following:

- Node.js (version 12 or higher)

To set up the application, follow these steps:

1.  Clone the repository to your local machine.
2.  Install the dependencies by running `yarn`.
3.  Start the application by running `yarn dev`.
4.  To run the documentation server `yarn docs`
5.  To run jest tests `yarn test`
