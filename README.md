# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



Project Description:

Dev Stack is a responsive web application that allows users to explore different web development technologies and build their own technology stack. Users can add technologies to their stack, remove individual technologies, and clear the entire stack.

The application is built with React and loads technology information from a JSON file.

Technologies Used:

React

Vite

JavaScript

Tailwind CSS

React Icons

React-Toastify

JSON

Features

Technology Explorer: Explore different web development technologies with their icons and information.

Personal Technology Stack: Add technologies to your stack and prevent duplicate entries.

Remove Technologies: Remove individual technologies or clear the entire stack.

Toast Notifications: Receive notifications when adding, removing, or trying to add a duplicate technology.

Loading Indicator: Display a loading indicator while technology data is being fetched.

Error Handling: Show an error message if the technology data fails to load.

Responsive Design: Provide a layout suitable for desktop, tablet, and mobile devices.

Questions and Answers

1. What is JSX, and why do we use it?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. It makes React components easier to write, read, and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time. When state changes, React updates the user interface.

3. What does the useState Hook do, and where is it used?

The useState Hook allows functional components to store and update data. In this project, it manages the technology data, selected stack, loading status, and error status.

4. What does the useEffect Hook do, and why is it used for fetching JSON?

The useEffect Hook is used to perform side effects in React components. In this project, it fetches technology data from technologies.json when the component first loads. The empty dependency array prevents the effect from running after every render.

5. Why does each item created with map() need a unique key?

React uses keys to identify individual items in a list. Unique keys help React recognize which items have changed, been added, or been removed. In this project, tech.id is used as the key for each technology card.

6. What is conditional rendering? Give an example from this project.

Conditional rendering means displaying content based on a condition. In this project, a loading indicator appears while data is being fetched, and an error message appears if fetching fails. The Stack component can also display a message when the stack is empty.

7. How does data move between parent and child components?

A parent component passes data and callback functions to child components through props. In this project, TechExplorer passes technology information and event handlers to TechCard. It also passes the selected stack and removal and clearing functions to Stack. The child components call these functions when the user interacts with them.