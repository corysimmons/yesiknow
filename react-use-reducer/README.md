# react-use-reducer

Made with CRA and https://github.com/troch/reinspect (so it works with Redux Devtools).

Interesting bit of code is all in [App.js](src/App.js).

- `yarn`
- `yarn start`

`useReducer` is like Redux built into React core. It consolidates the logic that revolves around a component's state to one place (whereas `useState` frequently ends up scattered all over a component).

Typically `useReducer` is just used for component state, but you could easily combine it with `useContext` and manage global state as well.

> https://www.youtube.com/watch?v=o-nCM1857AQ