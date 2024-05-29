const reactTerminologies = [
    {
      term: "JSX (JavaScript XML)",
      definition: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in JavaScript and place them in the DOM.",
      question: "What is JSX in React, and why is it used?"
    },
    {
      term: "Components",
      definition: "Components are the building blocks of a React application. They are reusable pieces of UI that can be either class-based or function-based.",
      question: "Explain the difference between class components and functional components in React."
    },
    {
      term: "Props",
      definition: "Props (short for properties) are read-only attributes used to pass data from parent components to child components.",
      question: "How do props work in React? Provide an example of passing props to a child component."
    },
    {
      term: "State",
      definition: "State is an object that holds data or information about the component. It can change over time, typically in response to user actions or network responses.",
      question: "What is state in React, and how does it differ from props?"
    },
    {
      term: "Hooks",
      definition: "Hooks are special functions that allow you to 'hook into' React state and lifecycle features from function components.",
      question: "What are React hooks? Explain the purpose of the `useState` and `useEffect` hooks with examples."
    },
    {
      term: "Lifecycle Methods",
      definition: "Lifecycle methods are special methods in class components that get called at different stages of the component's life, such as mounting, updating, and unmounting.",
      question: "Describe the lifecycle methods in React class components. What are the key differences between `componentDidMount` and `componentWillUnmount`?"
    },
    {
      term: "Virtual DOM",
      definition: "The Virtual DOM is a lightweight representation of the real DOM. React uses it to optimize updates and rendering by comparing the virtual DOM with the real DOM.",
      question: "What is the Virtual DOM, and how does it improve the performance of a React application?"
    },
    {
      term: "Conditional Rendering",
      definition: "Conditional rendering in React allows you to render different UI elements based on certain conditions.",
      question: "How can you implement conditional rendering in a React component? Provide an example."
    },
    {
      term: "Handling Events",
      definition: "React allows you to handle events such as clicks, form submissions, and keyboard input in a declarative way.",
      question: "How do you handle events in React? Explain with an example of a button click event."
    },
    {
      term: "Forms and Controlled Components",
      definition: "Controlled components are form elements that are controlled by React state. The form data is handled by the component rather than the DOM.",
      question: "What is a controlled component in React? How do you handle form submission and state updates in controlled components?"
    },
    {
      term: "Context API",
      definition: "The Context API allows you to create global variables that can be passed around in a React application, helping to avoid prop drilling.",
      question: "What is the Context API, and how do you use it to manage global state in a React application?"
    },
    {
      term: "Redux (Optional)",
      definition: "Redux is a state management library for JavaScript apps, often used with React to manage application state in a predictable way.",
      question: "What is Redux, and how does it integrate with React to manage application state?"
    }
  ];


function getInfo(){
    return reactTerminologies
}

export default getInfo;