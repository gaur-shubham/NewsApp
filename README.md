# 📰 NewsApp

A modern React-based news application that fetches real-time headlines using NewsAPI.
Users can browse news by category with a smooth infinite scroll experience and a top loading progress indicator.

## ✨ Features

- 🔍 Real-time news powered by NewsAPI
- 🗂️ Category-based news:
    - Business
    - Entertainment
    - General
    - Health
    - Science
    - Sports
    - Technology
- ♾️ Infinite scroll (no pagination or next/previous buttons)
- 🚀 Fetches news in batches of 18 articles per API request
- 📊 Top loading progress bar for better UX
- 🎨 Responsive UI using Bootstrap
- ⚛️ Migrating from class-based components to function-based components with Hooks
- 🔐 API key handled via environment variables

### Tech Stack

- React (Create React App)
- React Router DOM
- React Hooks (useState, useEffect, useCallback)
- Bootstrap
- NewsAPI
- react-top-loading-bar component
- Infinite-Scroll component

## 📜 Available Scripts

### `npm start`

Runs the app in development mode with hot reload.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🧭 Project Status
- Current (v1.0)
- Stable class-based React implementation
- Infinite scroll enabled
- Production-ready baseline