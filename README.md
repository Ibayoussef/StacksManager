# My Stack Manager

My Stack Manager is a web application that allows users to view stacks and their components.

## First Thoughts

The first thing thing that comes to mind that it's going to be a devops tool created mainly for developers as users
there should be a clear UI showing the key information about each stack with the ability to search/filter/sort them for
easy navigation also a pagination that is triggered once we have many stacks because pagination works better on websites where users are looking
for specific pieces of content. Whereas infinite scroll is better suited for websites where you want users to discover
and explore the content available while infinite scroll is also much more effective for mobile devices. also there should be a space where the
the user can access each stack's details also the component's details.

## Features

- View a list of recently updated stacks
- Search, filter, and sort the list of stacks
- View details of a stack, including its name, description, and components
- View details of a component within a stack, including its name, type, flavor, and configuration

## User Flow

The following is a basic user flow for the My Stack Manager application:

1.  Landing page: When the user first opens the application, they are taken to a landing page that displays a list of the most recently updated stacks, along with options to search, filter, and sort the list.

2.  Viewing stacks: The user can click on a stack to view more details about it, such as its name, description, and components. From this page, the user can also edit or delete the stack, or view the details of the components within the stack.

3.  Viewing components: To view the details of a component within a stack, the user clicks on the component name, which takes them to a page displaying the component details, such as its name, type, flavor, and configuration.

## Getting Started

To run the application, you will need to have the following:

- Node.js (version 12 or higher)

To set up the application, follow these steps:

1.  Clone the repository to your local machine.
2.  Install the dependencies by running `yarn`.
3.  Start the application by running `yarn dev`.
