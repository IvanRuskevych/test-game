## Prerequisites
- Node.js and npm installed on your system.
## Step 1: Install Dependencies
- First, navigate to your project directory in the terminal and run the following command to install dependencies:
`npm install`.
- This will install all the required packages specified in your package.json.

## Step 2: Run Development Server
- To start the development server, run the following command: `npm run dev`.
- This command will use Vite to start a development server, which will serve your web application and provide features like hot module replacement for faster development.

## Step 3: Build for Production
- When you're ready to deploy your application, you'll need to build it for production. Run the following command:
`npm run build`. 
- This command will generate a production-ready build of your application in the dist directory.

## Step 4: Preview Production Build
After building your application for production, you may want to preview it locally before deploying it. Run the following command:
`npm run preview`
This will serve the production build of your application locally, allowing you to test it in a production-like environment.


## Step 5: Linting
To ensure your code follows best practices and maintain consistency, you can run ESLint. Run the following command:
`npm run lint`
This will analyze your JavaScript and JSX files for potential errors or style violations according to your ESLint configuration.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
