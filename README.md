# Awesome React Structure

Below is a general structure for React applications. There may be some differences in the source code to suit the project's technology and business requirements.

```
.
├── public/                        # Static assets (favicons, fonts, etc.)
├── src/                           # Main source code (src directory may not exist in NextJs application)
│   ├── app/                       # Application-wide configurations and routes. It will be the App directory or Page directory of NextJs application.
│   │   ├── routes/                # Application route definitions
│   │   └── root.tsx               # Root component for the application
│   ├── assets/                    # Static assets (e.g., images, CSV files)
│   │   ├── images/                # Image assets
│   │   ├── csv-files/             # CSV data files
│   │   └── ...                    # Other static assets
│   ├── configs/                   # Configuration files (e.g., environment settings)
│   ├── e2e-tests/                  # e2e test files (e.g., playwright, cypress)
│   ├── lib/                        # Utility libraries and helpers
│   │   ├── __test__/               # Tests for utility functions
│   │   ├── constants/              # Constant values
│   │   ├── datetime/               # Date-time utilities
│   │   ├── http-client/            # API client (e.g., Axios)
│   │   ├── utils/                  # General utility functions
│   │   ├── validator/              # Data validation logic
│   │   └── index.ts                # Central export file for library modules
│   ├── presentation/               # UI and feature-related components
│   │   ├── components/             # Reusable UI components
│   │   │   ├── common/             # Common folder contains reused components
│   │   │   │   ├── auth-wrapper/   # Authentication wrappers
│   │   │   │   │   ├── protected-wrapper.tsx
│   │   │   │   │   └── public-wrapper.tsx
│   │   │   │   ├── layout/         # Layout components (e.g., header, footer)
│   │   │   │   │   ├── header.tsx
│   │   │   │   │   └── footer.tsx
│   │   │   └── ui/                 # UI-specific components (buttons, inputs, etc.). They wrap components from UI libraries like Ant Design (AntD), ShadCN-UI, MUI, etc.
│   │   │       ├── button.tsx
│   │   │       ├── input.tsx
│   │   │       └── ...
│   │   ├── hooks/                  # Global custom hooks
│   │   │   ├── __test__/            # Tests for hooks
│   │   │   ├── use-scroll.ts        # Example hook (scroll behavior)
│   │   │   └── ...
│   │   ├── stores/                  # State management (e.g., Zustand, Redux)
│   │   │   │── __tests__/            # Tests for stores
│   │   │   ├── use-user.store.ts     # Example user store
│   │   │   └── ...
│   │   ├── styles/                   # Global and custom styles
│   │   │   ├── custom-a.css
│   │   │   └── global.css
│   │   ├── views/               # view-based modular architecture
│   │   │   └── view-a/          # view A
│   │   │       ├── __tests__/      # Test the view
│   │   │       ├── components/     # Components specific to view A
│   │   │       │   └── form-a.tsx
│   │   │       ├── hooks/          # Custom hooks for view A
│   │   │       │   └── use-form-a.tsx
│   │   │       ├── styles/         # view-specific styles
│   │   │       │   └── form-a.css
│   │   │       ├── types/          # Type definitions
│   │   │       │   ├── form-a-return-type.ts
│   │   │       │   └── index.ts
│   │   │       ├── view-a-list.view.tsx   # List view for view A
│   │   │       └── view-a-detail.view.tsx # Detail view for view A
│   ├── services/                     # Business logic and API service layer
│   │   ├── _models/                   # Type models for API responses
│   │   │   ├── ...
│   │   │   └── service-a.model.ts
│   │   ├── service-a/                 # Service for Feature A
│   │   │   ├── __test__/               # Tests for services
│   │   │   ├── service-a.controller.ts # Controller logic for service A
│   │   │   ├── service-a.dto.ts        # Data Transfer Objects (DTOs)
│   │   │   ├── service-a.http.ts       # HTTP request functions
│   │   │   ├── service-a.schema.ts     # Schema validation (e.g., Zod, Yup)
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── main.ts                        # Entry point for the application
│   └── vite-env.d.ts                   # Type definitions for Vite
└── ...<some configuration files>       # Various configuration files (ESLint, Prettier, etc.)
```

---

# 🔍 Which design pattern aligns with this structure?

| Pattern                                   | Match Level | Why?                                                                  |
| ----------------------------------------- | ----------- | --------------------------------------------------------------------- |
| **Layered Architecture (N-Tier)**         | ✅✅✅ High | Clear separation of Presentation, Services, and Models                |
| **View-Based Modular Architecture (VBA)** | ✅✅✅ High | View-based organization (`views/view-a/`)                             |
| **Component-Driven Architecture (CDA)**   | ✅✅ Medium | UI modularization using `components/ui/`                              |
| **Feature-Sliced Design (FSD)**           | ❌ Low      | Missing feature-based layers like `shared/`, `entities/`, `features/` |
| **Domain-Driven Design (DDD)**            | ❌ Very Low | No explicit domain layer or use-case separation                       |
| **Clean Architecture**                    | ❌ Low      | No clear **domain layer**, **use cases**, or **dependency inversion** |

### 🌟 What This Means

- ✅ That structure is good for UI-heavy applications like Next.js, React-based dashboards, or SaaS platforms.
- ✅ It scales well in terms of views, making it great for complex UI applications.

---

# 💅 Convention

### 1. Folder Naming Conventions

| Folder Type               | Naming Convention     | Example                         |
| ------------------------- | --------------------- | ------------------------------- |
| **Root directories**      | kebab-case            | `public/`, `src/`               |
| **Feature directories**   | kebab-case            | `services/`, `hooks/`, `views/` |
| **Component directories** | kebab-case            | `common/`, `ui/`, `layout/`     |
| **Utility directories**   | kebab-case            | `utils/`, `lib/`, `configs/`    |
| **Test directories**      | Lowercase, kebab-case | `__test__/`, `__tests__/`       |
| **State management**      | kebab-case            | `stores/`                       |
| **Style folders**         | kebab-case            | `styles/`                       |

### 2. File Naming Conventions

| File Type               | Naming Convention                              | Example                                          |
| ----------------------- | ---------------------------------------------- | ------------------------------------------------ |
| **Component files**     | kebab-case                                     | `header.tsx`, `footer.tsx`, `auth-wrapper.tsx`   |
| **Utility files**       | kebab-case                                     | `http-client.ts`, `datetime-utils.ts`            |
| **Hooks**               | kebab-case, starts with `use-`                 | `use-scroll.ts`, `use-auth.ts`                   |
| **Global styles**       | kebab-case                                     | `global.css`, `custom-a.css`                     |
| **View components**     | kebab-case, ends with `.view.tsx`              | `view-a-list.view.tsx`, `view-a-detail.view.tsx` |
| **Service files**       | kebab-case, feature-based                      | `service-a.http.ts`, `service-a.schema.ts`       |
| **State stores**        | kebab-case, starts with `use-`                 | `use-user.store.ts`                              |
| **Types & Interfaces**  | kebab-case, ends with `.ts`                    | `form-a-return-type.ts`, `index.ts`              |
| **Configuration files** | kebab-case                                     | `vite-env.d.ts`, `config.ts`                     |
| **Tests**               | kebab-case, ends with `.test.ts` or `.spec.ts` | `service-a.test.ts`                              |

#### 📌 Exception:

- My component file names and hook file names use `kebab-case` to synchronize with ShadCN-UI. You can use `PascalCase` for component file names and `camelCase` for hooks that start with `use` to match your team's codebase.
- You should apply the `Wrapper Pattern` for external libraries and avoid calling them directly.

#️⃣ Example: If you use `Axios`, you should wrap it in an `httpClient` variable inside the `http-client.ts` file and use it to call APIs. In the case of UI, you should use components from libraries like AntD, MUI, etc., **indirectly**, similar to how ShadCN-UI does. This approach makes it easier to customize styles, logic, and other aspects in one place for the entire application.

✅ Benefits of the Wrapper Pattern:

🔹 **Encapsulation** – Keep styles and behavior in one place, making updates easier.

🔹 **Centralized Theming** – Ensure a consistent design across the app.

🔹 **Maintainability** – Manage UI imports from a single source, reducing redundancy.

🔹 **Scalability** – Easily add new features like logging, authentication, or permissions.

🔹 **Future-Proofing** – Simplifies UI library migrations by wrapping external components.

### 3. Naming Conventions for Variables, Constants, Functions, and Events

| Element Type                    | Naming Convention                                      | Example                                   |
| ------------------------------- | ------------------------------------------------------ | ----------------------------------------- |
| **Local Variables**             | camelCase                                              | `userProfile`, `totalCount`               |
| **Constants**                   | UPPER_CASE_SNAKE                                       | `API_BASE_URL`, `MAX_LOGIN_ATTEMPTS`      |
| **Environment Variables**       | UPPER*CASE_SNAKE, starts with `REACT_APP*` (for React) | `REACT_APP_API_KEY`                       |
| **Functions**                   | camelCase, should be a verb                            | `fetchData()`, `handleSubmit()`           |
| **Component**                   | PascalCase                                             | `Button`, `Input`                         |
| **Component Props**             | camelCase                                              | `isLoading`, `userName`                   |
| **Event Handlers**              | camelCase, prefixed with `handle`                      | `handleClick()`, `handleFormSubmit()`     |
| **Booleans**                    | camelCase, prefixed with `is`, `has`, or `can`         | `isVisible`, `hasPermission`, `canEdit`   |
| **State Variables (useState)**  | camelCase, prefixed with the state name                | `[user, setUser]`, `[isOpen, setIsOpen]`  |
| **Redux Actions**               | UPPER_CASE_SNAKE                                       | `LOGIN_SUCCESS`, `FETCH_USER_FAILURE`     |
| **GraphQL Queries & Mutations** | camelCase                                              | `getUserQuery`, `updateProfileMutation`   |
| **Enums**                       | PascalCase                                             | `UserRole.Admin`, `ButtonVariant.Primary` |

---

# 🧪 Testing Strategy

Tests are helpful, but they can’t catch every bug. No test setup can make your app 100% bug-free. There are different ways to test, and each one covers different parts of your app. Based on my experience, here’s how I usually organize testing for a react app:

| **Layer**        | **Target**                                  | **Tools**             |
|------------------|----------------------------------------------|----------------------------------|
| 🔬 Unit Test     | Pure functions, Validation schemas (zod, yup, .etc)                  | Jest, Vitest                             |
| 🔗 Integration  | Custom hooks, store management               | RTL + `renderHook`, MSW         |
| 🚀 E2E           | UI logic, interactions, critical flows       | Playwright or Cypress           |


---

# ⁉️ Why Does It Not Fully Follow Domain-Driven Design or Clean Architecture?

While Domain-Driven Design (DDD) and Clean Architecture (CA) work well for backend systems with complex business logic, fully applying them to a frontend app can create unnecessary complexity.

**1️⃣ DDD and CA are designed for Complex Business Domains, Not UI Logic:**

DDD and CA are best suited for backend systems with rich business logic, while frontend apps mainly focus on UI rendering and user interactions.

**2️⃣ Too Much Boilerplate for a Frontend App**

Implementing full DDD and CA requires entities, aggregates, repositories, and domain services, which add overhead without clear benefits.
💡 In frontend apps, we primarily fetch data from APIs—we don’t need to define business rules at this level.

**3️⃣ Frontend Apps Rely on API Calls, Not Repositories**

DDD and CA emphasize the repository pattern for managing data access, but frontend apps mostly interact with APIs (REST or GraphQL).
💡 Unlike backend systems, Frontend apps don’t need full repository abstractions—they simply fetch and display data.

**4️⃣ Increases Complexity Without Benefits**

Most frontend apps prioritize UI/UX, performance, and maintainability over deep domain modeling.
💡 Over-engineering frontend logic slows development without improving the user experience.

**5️⃣ Slows Down Development Speed**

More abstraction = more boilerplate = slower development.
💡 Adding unnecessary layers increases complexity without making the app more scalable or maintainable.

---

# 🤌🏼 How About Feature-Sliced Design (FSD)?

✅ Yes, that’s a great idea if you want to organize your frontend application in more detail.

😊 **Feature-Sliced Design (FSD)** is a modern architecture that helps scale frontend applications, but I haven't used it because:

1️⃣ FSD forces a deep folder structure, which adds unnecessary complexity if your app isn't large enough.

2️⃣ Harder for new developers to learn.

3️⃣ Increased file & folder overhead.

4️⃣ Global state management becomes harder because each feature handles its own state.

5️⃣ Harder to refactor shared logic.

---

# 🤏 What if your project is too hard to follow my structure, or you want to use a simpler one?

Just follow this article: [Recommended Folder Structure for React 2025](https://dev.to/pramod_boda/recommended-folder-structure-for-react-2025-48mc)

---

# 📖 References

- [Architecture of modern frontend](https://blog.meetbrackets.com/architectures-of-modern-front-end-applications-8859dfe6c12e)

- [Feature-Sliced-Design (FSD) the best frontend architecture](https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj)

- [React Folder Structure in 5 Steps - 2025](https://www.robinwieruch.de/react-folder-structure/)

- [3 Levels of Data Validation in a Full Stack Application With React](https://www.highlight.io/blog/3-levels-of-data-validation-in-a-full-stack-application-with-react)

- [Clean Architecture on Frontend](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)

- [Story of a Failed React Project](https://dev.to/mohammadfaisal/story-of-a-failed-react-project-4bhp)

- [Feature-Sliced Design document](https://github.com/feature-sliced)

- [My struggles with React Testing Library](https://blog.hao.dev/my-struggles-with-react-testing-library)

- [The myth of speed without testing](https://www.linkedin.com/pulse/myth-speed-without-testing-juan-irigoyen-sak6f/)

---

# 🗄️ Examples

- [Vite - React - Typescript - Shadcn](https://github.com/nqhed/awesome-frontend-structure/tree/vite-react-ts-shadcn)
