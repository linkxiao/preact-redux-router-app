# Try Preact

Egghead Online Course: [Up and Running with Preact](https://egghead.io/courses/up-and-running-with-preact)

![image](https://rawgit.com/mvpdw06/try-preact/master/img/preact.png)

## Current on Class

> All missions completed!

## Preact ecosystems

1. preact
2. preact-router
3. preact-redux

> For replacement React and ReactDOM, you can use preact-compat.

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
4. Integrate with React dev tools.
    ```
    import 'preact/devtools';
    ```

    And you can see your preact component in React dev tools.

5. Preact's Official recommendation is using Hot Module Replacement, not integrate with React-Hot-Loader.
6. When module.hot, you need to replace component automatically. Preact's render API needs another setting!
    ```
    import { h, render } from 'preact';

    let root;
    renderApp = () => {
        root = render(<App />, document.body, root);
    }

    module.hot && module.hot.accept(
        './app.js',
        renderApp
    );
    ```
    And you can auto reload component with Preact.

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

## Integrate with React-Router (replace preact-router)

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

and also need

```
$ yarn add preact-compat react-router-dom
```

So, we can use react-router-dom API in my App without preact-router!

## Integrate with React-Hot-Loader in React app.

```
// in webpack.config.js
{
    "resolve": {
        "alias": {
            "react": "preact-compat",
            "react-dom": "preact-compat",
            'preact-compat': 'preact-compat/dist/preact-compat'
        }
    }
}
```

And you can fix React-Hot-Loader can not find React.createElement API issue.

> But!!!!!!!!!! React-Hot-Loader can not work in Preact app, so you only can use in React warped app as Preact.