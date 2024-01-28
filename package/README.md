# Stan Coding Challenge

### Description

Using React and Typescript, to create stan homepage and feature page.

### What's in the project

Client provides the front-end app to view bus report data from the JSON file

### Tech stacks

React, React hooks, Typescript, ES6, styled-components and scss, etc...

### How to run the App

- Go to the root folder

- Run `yarn install`

- Run `yarn dev`

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How to test:

- Go to the root folder

- Run `yarn test`

### How to build:

- Go to the root folder

- Run `yarn build`

- The build vervion will be shonwn in the dist folder

### Note:

- You’ll need to have Node 18.18.0 or a later version on your local development machine (but it’s not required on the server).

- You’ll need to have Chome version 119 or the later version on your local development machine.

### How did you decide on the technical and architectural choices used as part of your solution?

#### technical

- To use foundamental technical stack, React, React hooks, Typescript, ES6, styled-components and scss, to avoid additional dependency to be added in the package.

#### architectural choices

- To use react-router to navigate between pages

- To create a custom hooks and get data, error, isFetching values from the hook

- To use the hook in the homepage and dynamic Category pages

- To includes all components in the component folder

### Are there any improvements you could make to your submission?

- Homepage shows two cards all the time

- The api end point will be different on prod env

- It will show a No Category message when the Category route is not matched

- For now, all links on header and footer will navigate to the main page, as there are NO pages linked yet

- All mobile and table UI are based on the assumption, as there are no designs provided yet

- No custom fonts used yet

### What would you do differently if you were allocated more time?

- to improve the accessibilities

- to improve the UI for mobile and tablet views

- to create a UI component lib and include all components

- to improve unit test
