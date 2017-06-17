# Try Preact

Egghead Online Course: [Up and Running with Preact](https://egghead.io/courses/up-and-running-with-preact)

## Current on Class

> Class-08 Reduce the Size of a React App in Two Lines with preact-compat

## What different with React?

1. We need to use babel-plugin-transform-react-jsx to translate Preact.
    ```
    "plugins": [
        ["transform-react-jsx", { "pragma": "h" }]
    ]
    ```
2. Can not use React-Hot-loader.
3. Component's render API have parameter props and state.
    ```
    render(props, state) {
        return (
            <div>{ state.context }</div>
        );
    }
    ```
    So, we can destructuring assignment and initial state in parameter.
    ```
    render(props, { context = '' }) {
        return (
            <div>{ context }</div>
        );
    }
    ```

## Reduce React app size with preact-compat

```
// in webpack.config.js
{
  "resolve": {
    "alias": {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  }
}
```

> preact-compat will replace React, ReactDOM to Preact.