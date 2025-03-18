# Awesome Frontend Structure

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
│   ├── configs/                   # Configuration files (e.g., API keys, environment settings)
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

## 🔍 Which design pattern aligns with this structure?

| Pattern                           | Match Level   | Why?                                                      |
|-----------------------------------|--------------|-----------------------------------------------------------|
| **Layered Architecture (N-Tier)** | ✅✅✅ High   | Clear separation of Presentation, Services, and Models    |
| **View-Based Modular Architecture (VBA)** | ✅✅✅ High   | View-based organization (`views/view-a/`)                |
| **Component-Driven Architecture (CDA)** | ✅✅ Medium  | UI modularization using `components/ui/`                  |
| **Feature-Sliced Design (FSD)**   | ❌ Low       | Missing feature-based layers like `shared/`, `entities/`, `features/` |
| **Domain-Driven Design (DDD)**    | ❌ Very Low  | No explicit domain layer or use-case separation           |
| **Clean Architecture**            | ❌ Low       | No clear **domain layer**, **use cases**, or **dependency inversion** |

### 🌟 What This Means
- ✅ That structure is good for UI-heavy applications like Next.js, React-based dashboards, or SaaS platforms.
- ✅ It scales well in terms of views, making it great for complex UI applications.

## 📦 Applied The Wrapper Pattern

We have applied the Wrapper Pattern in the `/presentation/components` and `/lib` folders to improve code efficiency and maintainability. This approach saves time and reduces technical debt by centralizing common behaviors and styles.

**Benefits:**

✅ Benefits of the Wrapper Pattern:
🔹 Encapsulation – Keep styles and behavior in one place, making updates easier.
🔹 Centralized Theming – Ensure a consistent design across the app.
🔹 Maintainability – Manage UI imports from a single source, reducing redundancy.
🔹 Scalability – Easily add new features like logging, authentication, or permissions.
🔹 Future-Proofing – Simplifies UI library migrations by wrapping external components.

## ⁉️ Why Does It Not Fully Follow Domain-Driven Design or Clean Architecture?

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

## 🤌🏼 How About Feature-Sliced Design (FSD)?

✅ Yes, that’s a great idea if you want to organize your frontend application in more detail.
 [Feature-Sliced Design document](https://github.com/feature-sliced/documentation)



## 📖 References

- [Architecture of modern frontend](https://blog.meetbrackets.com/architectures-of-modern-front-end-applications-8859dfe6c12e)
- [Feature-Sliced-Design (FSD) the best frontend architecture](https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj)
- [React Folder Structure in 5 Steps - 2025](https://www.robinwieruch.de/react-folder-structure/)
- [3 Levels of Data Validation in a Full Stack Application With React](https://www.highlight.io/blog/3-levels-of-data-validation-in-a-full-stack-application-with-react)
- [Clean Architecture on Frontend](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)
- [Story of a Failed React Project](https://dev.to/mohammadfaisal/story-of-a-failed-react-project-4bhp)

## 🗄️ Examples

- [Vite - React - Typescript - Shadcn](https://github.com/nqhed/awesome-frontend-structure/tree/vite-react-ts-shadcn)
