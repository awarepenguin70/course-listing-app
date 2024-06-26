
# Project Name

The Course Management System is a React web app enabling students and instructors to manage courses, track progress, and access materials. It features user authentication, course enrollment, progress tracking, and detailed course information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js & npm - [Install Node.js](https://nodejs.org/)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/awarepenguin70/course-listing-app.git
   cd course-listing-app
   
Install json-server globally: npm install -g json-server

Install project dependencies: npm install react react-dom axios typescript react-router-dom

Start json-server to create a mock REST API: json-server --watch db.json

This will start a JSON server and provide an endpoint URL. Copy this URL.

Configure the API endpoint in your project: Navigate to courseApi.js: const apiUrl = 'paste_your_json_server_endpoint_here';

Start the development server for your React app: npm run dev

Your web app should now be accessible at http://localhost:3000.


Built With
React - The web framework used
json-server - Mock REST API server
axios - Promise-based HTTP client
TypeScript - Typed JavaScript at Any Scale
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
