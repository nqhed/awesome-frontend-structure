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
│   │   ├── features/               # Feature-based modular architecture
│   │   │   └── feature-a/          # Feature A
│   │   │       ├── __tests__/      # Test the feature
│   │   │       ├── components/     # Components specific to Feature A
│   │   │       │   └── form-a.tsx
│   │   │       ├── hooks/          # Custom hooks for Feature A
│   │   │       │   └── use-form-a.tsx
│   │   │       ├── styles/         # Feature-specific styles
│   │   │       │   └── form-a.css
│   │   │       ├── types/          # Type definitions
│   │   │       │   ├── form-a-return-type.ts
│   │   │       │   └── index.ts
│   │   │       ├── feature-a-list.view.tsx   # List view for Feature A
│   │   │       └── feature-a-detail.view.tsx # Detail view for Feature A
│   │   ├── hooks/                  # Global custom hooks
│   │   │   ├── __test__/            # Tests for hooks
│   │   │   ├── use-scroll.ts        # Example hook (scroll behavior)
│   │   │   └── ...
│   │   ├── stores/                  # State management (e.g., Zustand, Redux)
│   │   │   │── __tests__/            # Tests for stores
│   │   │   ├── use-user.store.ts     # Example user store
│   │   │   └── ...
│   │   └── styles/                   # Global and custom styles
│   │       ├── custom-a.css
│   │       └── global.css
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

-----
## 🔍 Does it follow Clean Architecture?

**✅ Yes, it has:**

  * Separation of Concerns:
    - User interfaces (`/presentation`).
    - Business logic (`/services`).
    - Shared utilities (`/lib`).
    - Configuration (`/configs`).
  * Encapsulation of Features:
    - `/presentation/features/feature-a/` contains components, hooks, styles, and types specific to that feature.
    - This makes it __*scalable*__ and __*maintainable*__.
  * Service Layer:
    - `/services` contains business logic, DTOs, schemas, and HTTP calls, which decouples the API from the UI.
    - The schema is used to validate data from the client.
  * State Management:
    - `/stores` follows single responsibility by managing state separately.

## 👓 Wrapping UI Components (Wrapper Pattern)

Using in `/presentation/components` and `/lib` folder. It saves time and prevents technical debt.

**Benefits:**
- Encapsulation: Modify styles and behavior in one place.
- Centralized Theming: Keep the design consistent across the app.
- Maintainability: Manage UI imports from a single source.
- Scalability: Easily add features like logging and permissions.
- Future-Proofing: Simplifies UI library migration.

## 🗄️ Examples

- [Vite - React - Typescript - ShadCN-UI](https://github.com/nqhed/awesome-frontend-structure/tree/vite-react-ts-shadcn)
