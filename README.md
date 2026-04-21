# Vartalap Sahayata — Unified Business Intelligence Dashboard

A full-stack business intelligence web application that consolidates billing, inventory management, expense tracking, customer profitability analysis, and AI-assisted data quality review into a single, unified interface.

---

## Table of Contents

1. [Project Description](#1-project-description)
2. [Demo / Screenshots](#2-demo--screenshots)
3. [Features](#3-features)
4. [Tech Stack](#4-tech-stack)
5. [Installation & Setup](#5-installation--setup)
6. [Usage](#6-usage)
7. [Project Structure](#7-project-structure)
8. [Design Decisions / Architecture](#8-design-decisions--architecture)
9. [Challenges & Learnings](#9-challenges--learnings)
10. [Future Improvements](#10-future-improvements)
11. [Testing](#11-testing)
12. [Deployment](#12-deployment)
13. [Author](#13-author)
14. [License](#14-license)

---

## 1. Project Description

**Vartalap Sahayata** (meaning "Conversation Support" in Hindi) is a comprehensive business intelligence dashboard built for small to medium-sized businesses that need a single pane of glass for their operational and financial data.

**Problem it solves:** Small business owners typically juggle multiple disconnected tools — spreadsheets for inventory, separate software for billing, and manual calculations for profit/loss. This application eliminates that fragmentation by providing:

- A centralized platform for creating and managing invoices
- Real-time inventory intelligence with reorder alerts
- Automated profit/loss and customer profitability reporting
- Sales forecasting and advanced analytics with interactive charts
- An integrated AI assistant link for data quality analysis

---

## 2. Demo / Screenshots

[Add live demo link here — e.g., https://vartalap-sahayata.netlify.app]

| Module | Screenshot |
|---|---|
| Bill Generator | [Add screenshot] |
| Business Overview Dashboard | [Add screenshot] |
| Sales Forecasting | [Add screenshot] |
| Inventory Intelligence | [Add screenshot] |
| Customer Profitability | [Add screenshot] |

---

## 3. Features

**Operational Management**
- Bill Generator — create professional invoices with line items, tax, and discounts
- Product Master — centralized catalog with cost price, selling price, stock levels, and reorder thresholds
- Bill Record Management — search, view, and delete historical bill records

**Financial Insights**
- Statement Generator — on-demand financial statements across configurable date ranges
- Expense & Profit/Loss Tracking — categorized expense entry with real-time P/L calculation
- Customer Profitability Analysis — revenue, cost, profit margin, and segment classification (High/Medium/Low Value) per customer

**Intelligence & Analytics**
- Inventory Intelligence — stock health monitoring with low-stock and out-of-stock alerts based on configurable reorder thresholds
- Sales Forecasting — trend visualization to anticipate future demand
- Advanced Analytics — multi-dimensional data exploration with interactive Recharts-powered visualizations
- Business Overview — holistic KPI dashboard covering revenue, expenses, top products, and customer segments

**AI Integration**
- "Chat with AI" button links to an external data quality analyzer and cleaner tool for reviewing and cleaning uploaded business data

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript 5 |
| Frontend Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3, shadcn/ui (Radix UI primitives) |
| Component Library | shadcn/ui — Accordion, Dialog, Dropdown, Select, Tabs, Toast, and more |
| Charts | Recharts 2 |
| Icons | Lucide React |
| Server State / Data Fetching | TanStack Query (React Query) v5 |
| Forms | React Hook Form v7 |
| Schema Validation | Zod |
| Routing | React Router DOM v6 |
| Backend / Database | Supabase (PostgreSQL with PostgREST API) |
| Auth & Realtime | Supabase JS Client v2 |
| Linting | ESLint 9 with typescript-eslint |

---

## 5. Installation & Setup

### Prerequisites

- Node.js 18+ and npm, or Bun
- A [Supabase](https://supabase.com/) account and project

### Environment Variables

Create a `.env` file in the project root with the following keys:

```env
VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-public-key>
```

Both values are available in your Supabase project under **Settings > API**.

### Database Setup

The application expects the following tables in your Supabase PostgreSQL database:

- `customers` — customer profiles with revenue/profit aggregates
- `products` — product catalog with pricing, stock, and reorder data
- `bills` — invoice headers (bill number, date, totals, customer reference)
- `bill_items` — invoice line items linked to bills and products
- `expenses` — categorized expense records

[Add SQL migration scripts or a link to the `/supabase` migrations folder here.]

### Local Installation

```bash
# 1. Clone the repository
git clone https://github.com/SIDHANTH-S/vartalap-sahayata.git
cd vartalap-sahayata

# 2. Install dependencies
npm install
# or
bun install

# 3. Configure environment variables (see above)
cp .env.example .env
# Edit .env with your Supabase credentials

# 4. Start the development server
npm run dev

# 5. Open in browser
# Navigate to http://localhost:8080
```

### Other Available Commands

```bash
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

---

## 6. Usage

The application is a Single Page Application (SPA) with a top navigation bar for switching between modules.

**Typical workflow:**

1. **Add Products** — Navigate to *Product Master* and add products with cost price, selling price, stock quantity, and reorder threshold.
2. **Create Bills** — Open *Bill Generator*, select a customer (or enter a new one), add line items from the product catalog, and submit to save the invoice to the database.
3. **Track Expenses** — Use *Expense Profit/Loss* to log operational expenses by category and date.
4. **Analyze Performance** — Switch to *Business Overview*, *Customer Profitability*, *Inventory Intelligence*, or *Sales Forecast* to view auto-calculated analytics drawn live from your Supabase data.
5. **Generate Statements** — Use *Statement Generator* to produce financial summaries for any date range.
6. **AI Data Review** — Click *Chat with AI* in the header to open the external data quality analyzer in a new tab.

---

## 7. Project Structure

```
vartalap-sahayata/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── pages/              # One component per application module
│   │   │   ├── BillGenerator.tsx
│   │   │   ├── StatementGenerator.tsx
│   │   │   ├── ProductMaster.tsx
│   │   │   ├── DeleteBillRecord.tsx
│   │   │   ├── InventoryIntelligence.tsx
│   │   │   ├── CustomerProfitability.tsx
│   │   │   ├── ExpenseTracking.tsx
│   │   │   ├── BusinessOverview.tsx
│   │   │   ├── SalesForecasting.tsx
│   │   │   └── AdvancedAnalytics.tsx
│   │   ├── ui/                 # shadcn/ui component library
│   │   └── Navigation.tsx      # Top navigation bar with tab switching
│   ├── hooks/
│   │   └── useBusinessData.ts  # Central data hook — loads and mutates all Supabase data
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts       # Supabase client initialization
│   │       └── types.ts        # Auto-generated TypeScript types from database schema
│   ├── types/                  # Shared frontend TypeScript interfaces
│   ├── lib/                    # Utility functions (e.g., cn() for class merging)
│   ├── App.tsx                 # Root component — tab-based routing via useState
│   └── main.tsx                # React entry point
├── supabase/
│   └── config.toml             # Supabase project configuration
├── .env                        # Environment variables (not committed)
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 8. Design Decisions / Architecture

**Client-side routing via state instead of React Router pages**
All navigation is handled through a single `activeTab` state in `App.tsx` rather than URL-based routes. This decision keeps the application simple for a dashboard context where deep-linking is not required, while avoiding unnecessary routing complexity.

**Centralized data layer with `useBusinessData`**
All Supabase reads and writes are consolidated in a single custom hook. This avoids prop-drilling, keeps components focused on presentation, and makes it straightforward to replace or augment the data source in the future.

**Supabase as a full backend**
Using Supabase provides a managed PostgreSQL database, a PostgREST auto-generated REST API, and type-safe client access without the overhead of building and maintaining a custom server. The auto-generated TypeScript types from the schema ensure type safety across the stack.

**shadcn/ui for the component system**
Rather than a monolithic component library, shadcn/ui provides copy-owned, unstyled Radix UI primitives styled with Tailwind CSS. This avoids vendor lock-in and allows precise style control without fighting library defaults.

**Zod + React Hook Form for form validation**
Pairing Zod schemas with React Hook Form's resolver pattern ensures that validation logic is declarative, reusable, and decoupled from UI rendering. Runtime type safety is guaranteed at form submission boundaries.

**TanStack Query for server state**
React Query manages caching, background refetching, and loading/error states for asynchronous data, keeping component logic clean and avoiding redundant API calls.

**Trade-offs**
- The `useBusinessData` hook currently loads all data on mount. For large datasets, this should be replaced with paginated or filtered queries.
- Analytics data currently includes a mock dataset fallback. A production implementation would derive all values directly from live database queries or Supabase database functions.

---

## 9. Challenges & Learnings

**Challenge: Type safety between Supabase schema and frontend models**
The database uses snake_case column names while the frontend uses camelCase interfaces. Maintaining two parallel type definitions and explicit transformation functions (`transformCustomer`, `transformProduct`, etc.) added boilerplate but ensured clean separation between the data layer and the UI layer.

**Challenge: Cascaded deletes for relational data**
Deleting a bill requires deleting its associated `bill_items` first due to foreign key constraints. Handling this transactionally in the client required careful sequencing of Supabase delete calls and rollback logic if the second delete failed.

**Challenge: Building a cohesive multi-module UI**
Coordinating a consistent design language across 10+ distinct functional modules required establishing shared component conventions early — using shadcn/ui components consistently and relying on Tailwind's design tokens for spacing and color prevented visual drift between modules.

**Learnings**
- Supabase's PostgREST API supports nested selects (e.g., fetching `bills` with `bill_items` and `customers` in a single query), which significantly reduces client-side data assembly.
- Centralizing all mutations in a custom hook makes optimistic updates and cache invalidation easier to reason about compared to scattered component-level fetch calls.

---

## 10. Future Improvements

- **Authentication** — Add Supabase Auth to support multiple users and role-based access control (e.g., admin vs. read-only viewer).
- **Paginated data loading** — Replace bulk data fetches with paginated queries and infinite scroll for large datasets.
- **Real-time updates** — Use Supabase Realtime subscriptions to push live data changes to connected clients without manual refresh.
- **PDF invoice export** — Add the ability to export generated bills as PDF documents directly from the Bill Generator.
- **Database-level analytics** — Move aggregation logic (revenue, profit margins, customer segments) from the client into Supabase PostgreSQL functions or views for better performance and accuracy.
- **Mobile responsiveness** — Optimize the navigation and dashboard layouts for mobile and tablet viewports.
- **Unit and integration tests** — Add test coverage for data transformation utilities and form validation logic.
- **Audit log** — Track bill creation, modification, and deletion events for compliance and review purposes.

---

## 11. Testing

No automated test suite is currently configured for this project.

Manual testing is performed by:

1. Running the development server (`npm run dev`) and exercising each module through the UI.
2. Verifying database writes in the Supabase Table Editor.
3. Validating form error states by submitting incomplete or invalid data.

**To run the linter:**

```bash
npm run lint
```

Future test coverage should include:
- Unit tests for data transformation functions in `useBusinessData.ts`
- Form validation tests using React Testing Library
- Integration tests for Supabase CRUD operations against a test database

---

## 12. Deployment

[Add deployment details here — e.g., hosted on Vercel/Netlify/Supabase hosting.]

**To build for production:**

```bash
npm run build
```

The output is placed in the `dist/` directory and can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

**Environment variables** (`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`) must be configured in the hosting provider's environment settings.

---

## 13. Author

**Sidhanth S**

- GitHub: [github.com/SIDHANTH-S](https://github.com/SIDHANTH-S)
- LinkedIn: [Add LinkedIn profile URL here]

---

## 14. License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2025 Sidhanth S

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
