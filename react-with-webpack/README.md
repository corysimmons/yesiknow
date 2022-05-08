# React and Webpack

This demo shows a pretty minimalist React (with JSX) & Webpack app.

- `public` dir is the default directory for where Webpack looks for the `index.html` it renders, as well as things like static assets (like images)
- `src` is the input dir. Any `.js` or `.css` files in there can have _Webpack loaders_ used to process and bundle them.
- We need to use [Babel](https://babeljs.io/) to enable using modern ES; transform JSX from its pseudo-HTML syntax to actual JS; and do things like automatically `import React from 'react'` so we don't have to include that line in every single React file.

## Getting Started

- `yarn`
- `yarn dev`
- http://localhost:8080/