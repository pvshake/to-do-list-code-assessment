# Frontend Code Assessment - To-Do List Application

## 🚀 Live Demo

[Access Here](https://pvshake-to-do-list.vercel.app)

## 📌 Overview

This project is a To-Do List web application developed as part of a frontend job interview process. The challenge evaluates frontend development skills, code quality, and attention to design details.

## 📜 Setup Instructions

Follow these steps to set up the project locally:

### Clone the repository

```
git clone https://github.com/pvshake/to-do-list-code-assessment.git
```

### Navigate to the project folder

```
cd to-do-list-code-assessment
```

### Install dependencies

```
yarn install
```

### Start the development server

```
yarn dev
```

### Run tests

```
yarn test
```

## 🎨 Design Specifications

- The complete UI design is available in [Figma File](./source/fe-challenge-todo_list.fig).
- The design includes all components, states, and interactions.
- The implementation follows a pixel-perfect approach with a fully responsive layout.

## 🛠️ Tech Stack & Features

- **React 19** (Component-based architecture)
- **Vite 6** (Fast development environment)
- **TypeScript 5** (Strict typing for maintainability)
- **React Router 7** (Routing system)
- **Tailwind CSS 3** (Utility-first CSS framework)
- **Figma Pro** (UI/UX design reference)
- **Custom Design System** (Index.css with Tailwind custom classes)
- **React Context API** (State management via `TasksContext.tsx`)
- **Vitest** & **Playwright** (Unit & E2E testing with `.spec.tsx` files)
- **ESLint + Prettier** (Code formatting and best practices)
- **Tasks Service (`tasks.service.ts`)**
  - Simulates API calls with `setTimeout`
  - Uses localStorage for persistence
  - Can be replaced by real API endpoints in the future
- **Drag and Drop Implementation**
  - Built using native HTML & JavaScript events (no external libraries)
  - Allows smooth task reordering
- **Additional Features**
  - Task editing (`editTask` method)
  - Task deletion (`deleteTask` method)
  - Optional due date
  - Smooth UI animations (e.g., button hover effects, drag animations)
  - Loading state (`<Loader />` component)
  - Empty state (`<EmptyResult />` component)
  - Performance optimizations with lazy loading pages, React Suspense, and route segmentation

## 🏗️ Architectural Overview

- **Component-Based Design**: Reusable components like `<TaskItem />`, `<TaskContent />`, and `<AddTaskInput />`.
- **State Management**: Global state managed via `TasksContext`, accessed through `useTasks()` by React Context API.
- **Drag-and-Drop Functionality**: Task reordering using vanilla JS and HTML events.
- **Responsive Design**: Fully optimized UI with Tailwind CSS and custom classes in `index.css`.
- **Testing Strategy**: Component tests using **Vitest** & **Playwright**, with `.spec.tsx` for validation.
- **Separation of Concerns**: Organized structure with directories for:
  - `@types` (Type definitions)
  - `components` (Reusable UI elements)
  - `assets` (Icons & animations)
  - `contexts` (State management)
  - `pages` (Application screens)
  - `routes` (Routing logic)
  - `services` (API simulation & future backend integration)
  - `utils` (Helper functions)
- **Backend Integration-Ready**: Local state logic can be easily replaced with real API calls.

## ⏳ Development Time Tracking

[![wakatime](https://wakatime.com/badge/user/6dcab2c7-684b-409a-a0f3-09ac48569e8f/project/6feb4ad3-0cb4-47cb-adc8-3ae3bda75f7d.svg)](https://wakatime.com/badge/user/6dcab2c7-684b-409a-a0f3-09ac48569e8f/project/6feb4ad3-0cb4-47cb-adc8-3ae3bda75f7d)

---

This project demonstrates a scalable, high-performance, and maintainable frontend solution with a solid foundation for future enhancements. 🚀
