# Chartix — Indian Railway Chart Intelligence

Chartix is a production-oriented railway analytics platform for authorized chart intelligence: train search, route occupancy, coach visualization, berth maps, exports-ready dashboards, PWA support, and a secure backend abstraction.

## Architecture

- Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, React Query, Zustand, React Hook Form, Zod, Recharts, Lucide, Radix-ready UI primitives.
- Express API with Helmet, rate limiting, CSRF cookies, JWT sessions, Zod validation, and audit/cache models in Prisma.
- Mock railway provider for development. Replace `MockRailwayProvider` behind the provider interface with an officially authorized railway data source; credentials stay server-side through environment variables.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Run the API separately when using remote mode:

```bash
npm run api:dev
```

## Quality Gates

```bash
npm run typecheck
npm run build
npm run lint
```

## Deployment

- Vercel-ready Next.js project.
- Docker image and compose file included.
- Use PostgreSQL in production by updating Prisma datasource provider and `DATABASE_URL`.
