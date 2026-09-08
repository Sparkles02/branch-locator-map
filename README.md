# Branch Locator Map

A map-based web application for customers to find their nearest bank branch, view branch details, and get directions.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Leaflet (react-leaflet)
- **BFF:** Node.js, Express, TypeScript
- **Styling:** CSS
- **Testing:** Vitest, React Testing Library
- **Containerisation:** Docker, Docker Compose

## Prerequisites

- Node.js v22+
- npm v11+
- Docker + Docker Compose (or Rancher Desktop)

## Project Structure

```
branch-locator-map/
├── frontend/         # React + TypeScript frontend
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── Dockerfile
├── bff/              # Express BFF
│   ├── src/
│   │   ├── routes/
│   │   └── data/
│   └── Dockerfile
└── docker-compose.yml
```

## Running with Docker

From the root of the project:

```bash
docker-compose up --build
```

- Frontend: http://localhost:80
- BFF: http://localhost:3001

## Running Locally (without Docker)

### BFF

```bash
cd bff
npm install
npm run dev
```

BFF runs on http://localhost:3001

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on http://localhost:5173

## Running Tests

```bash
cd frontend
npm test
```

## Features

- Interactive map with branch markers
- Responsive branch list and sidebar
- Search by branch name, suburb, city, or postal code
- Branch details including opening hours and amenities
- Open/Closed status per branch
- Open Now filter
- Find My Location using browser geolocation
- Distance calculation and sorting
- Directions via Google Maps
- Click-to-call phone action
- Loading, empty, and error states
- Geolocation denied handling
- Fully containerised with Docker

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/branches | Returns all branches |
| GET | /api/branches/:id | Returns a single branch by ID |
