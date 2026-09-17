# DevCraft — Web Development Agency Website

A production-structured, full-stack marketing site for a web development agency: React/Vite/TypeScript/Tailwind/Framer Motion frontend and a lightweight Express/TypeScript backend that powers a project-enquiry form.

## Stack

**Frontend:** React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, Lucide Icons
**Backend:** Node.js, Express, TypeScript, MongoDB (Mongoose), express-validator, express-rate-limit, Helmet, CORS

No auth, no user accounts, no admin dashboard — the backend exists to receive and store project enquiries.

## Run locally with Docker (recommended)

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000/api
- MongoDB: mongodb://localhost:27017

## Run locally without Docker

**Backend**
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

**Frontend**
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Testing

```bash
cd backend
npm test
```

## Project structure

```
frontend/   React app (pages, sections, components, centralized data/config)
backend/    Express API (routes -> controllers -> services -> models)
docker-compose.yml
```

## Editing content

All business content (services, pricing, portfolio, testimonials, FAQs, stats, social links, contact info) lives in `frontend/src/data/*.ts`. Edit those files — no component changes required — to update copy shown across the site. Portfolio projects and testimonials shipped in this repo are explicitly marked as demo/placeholder data; replace them with real client work and reviews before launch.

## Environment variables

See `frontend/.env.example` and `backend/.env.example`. Never commit `.env`.
