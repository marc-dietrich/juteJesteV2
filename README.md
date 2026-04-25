# juteJeste

React + TypeScript + Vite starter project.

## Scripts

- `npm run dev` – Start development server.
- `npm run build` – Type-check and build for production.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint.

## Development

Install dependencies (if needed):

```bash
npm install
```

Run the app:

```bash
npm run dev
```

## Demo Tunnel (ngrok + Docker)

1. Copy `.env.demo.example` values into your shell:

```bash
export NGROK_AUTHTOKEN="<your-ngrok-token>"
export DEMO_PORT=4173
```

2. Start demo server + public tunnel:

```bash
npm run demo:start
```

3. Stop everything:

```bash
npm run demo:stop
```
