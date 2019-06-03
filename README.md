# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

---

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to validate state or prop information moving through your apps. In using PropTypes you are able to check whether any given object matches a specific data type or data shape. Type Checking your data allows you to make sure that all of the information being passed around is moving in the exact form that you are expecting it to. Having incorrect/unvalidated data moving through your app, something which is quite common when more than one developer touches any given codebase, can lead to unexpected side effects and results which is why type checking is so important.

- [x] Describe a life-cycle event in React?

Every component in a React application follows a cycle from when it is made (initialized and mounted to the DOM) to when it is removed (unmounted from the DOM and destroyed). This is what is referred to as the life-cycle of an event in React. The events that can be used are as follows:

### Mounting Methods:

`constructor()` - This is the initialization stage of the object within React. This is the only point during which you should work with an object's state directly since the state data should be immutable and, being that this is the initialization of said state data, this is the only stage during which this data can be declared manually.
`render()` - This is the stage during which an object mounts and is added to the DOM.
`componentDidMount()` - This method is called after the component has been mounted and is available to the DOM. This is typically the best place for API calls and any and all setup that couldn't be done without the DOM such as adding event listeners.

### Updating Methods:

`shouldComponentUpdate()` - Called before component re-renders if either the props or state change.
`render` - Same as before although this time the object is already mounted. Instead the object is simply re-rendered to the prop using the renewed state or prop information.
`componentDidUpdate()` - Called after component re-renders.

### Unmounting Method:

`componentWillUnmount` - This method is called right before the Object is removed from the DOM. It can be used to 'clean-up' any extra data that might be hanging around.
NOTE: There is also an error catching method `componentDidCatch` that was recently added in React to deal with unhandled JavaScript errors. This can be used to produce fallback UI for your app.

- [x] Explain the details of a Higher Order Component?

A Higher Order Component (commonly know as a HOC) is a component which takes in other components and returns something based on preset logic. One common example of this is what we did in class known as conditional rendering. This means that the HOC is fed multiple components and it returns a component based on a set of guidelines laid out inside of it. For example, you can create a HOC to dynamically switch rendering from a login component to a full app. Which one is displayed is based on the logic laid out in the HOC.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

CSS Stylesheets: Simple & Well Established. Although typically not as powerful as the other methods, the use of a pre-processor such as SASS makes this a worthwhile option for many organizations.
Styling Libraries (like ReactStrap and MaterialUI): Quick and easy once you're familiar with them, these libraries can help you quickly build powerful prototypes with minimal effort. You can also apply custom css to these to make them your own.
CSS-in-JS: Fairly new but gaining popularity, css-in-js frameworks like `styled-components` and `emotion` allow your to control your styling at component level allowing for a compartmentalized separation of concerns where each item's structure, logic, and presentation are compartmentalized into a single document.

---

## Project Setup

Follow these steps to set up your project:

- [x] Create a forked copy of this project.
- [x] Add your project manager as collaborator on Github.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.
- [x] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [x] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [x] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [x] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [x] You should now be able to filter cards using your tabs!
- [x] Make sure all of your props being passed are validated using PropTypes.
- [x] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [x] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component.
- [x] Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)

---

### This fork is maintained by: Eric SarragaLugo
