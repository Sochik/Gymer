# Copilot Instructions for Gymer Codebase

## Overview
This document provides essential guidelines for AI coding agents to effectively navigate and contribute to the Gymer codebase. Understanding the architecture, workflows, and conventions is crucial for productive collaboration.

## Architecture
- **Component Structure**: The application is built using React with a component-based architecture. Key components are located in the `src/Components` directory, such as `Footer.jsx`, `Header.jsx`, and `Gallery.jsx`. Each component is responsible for a specific part of the UI, promoting reusability and separation of concerns.
- **Data Management**: Data is managed through the `Data` directory, which contains files like `itemsData.jsx`. This file exports data used across various components, ensuring a centralized data source.
- **Routing**: The application uses React Router for navigation. Routes are defined in the `Pages` directory, with each page component corresponding to a route in the application.

## Developer Workflows
- **Building the Project**: Use the command `npm run build` to create a production build. This command utilizes Vite for fast builds and hot module replacement (HMR).
- **Running the Development Server**: Start the development server with `npm run dev`. This command enables live reloading and is essential for testing changes in real-time.
- **Linting**: The project uses ESLint for code quality. Run `npm run lint` to check for linting errors based on the rules defined in `eslint.config.js`.

## Project-Specific Conventions
- **Styling**: The project employs Tailwind CSS for styling. Ensure to follow the utility-first approach when adding styles to components. Refer to the `tailwind.config.js` for custom configurations.
- **File Naming**: Components and pages should be named using PascalCase (e.g., `Footer.jsx`, `Home.jsx`). This convention helps in easily identifying React components.
- **State Management**: Local state is managed using React hooks (e.g., `useState`, `useEffect`). For global state management, consider using context or libraries like Redux if necessary.

## Integration Points
- **External Dependencies**: The project relies on several external libraries, including React, React Router, and Tailwind CSS. Ensure to check `package.json` for the list of dependencies and their versions.
- **Cross-Component Communication**: Components communicate through props and context. For example, the `Footer` component fetches tips from the `itemsData.jsx` file and displays them. This pattern should be followed for data sharing between components.

## Examples
- **Using Icons**: Icons are imported from `react-icons` and used within components. For instance, in `Footer.jsx`, icons like `FaEnvelope` and `FaMapLocationDot` are utilized to enhance the UI.
- **Linking**: Use the `Link` component from `react-router-dom` for navigation between pages. Ensure to define the `to` prop correctly to match the route paths.

## Conclusion
By following these guidelines, AI coding agents can effectively contribute to the Gymer codebase, ensuring consistency and quality in development. For any questions or clarifications, refer to the README.md or reach out to the development team.