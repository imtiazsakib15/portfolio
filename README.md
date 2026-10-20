# Imtiaz Ahmed Sakib - Portfolio

Single-page developer portfolio built with React 18 and Vite. It presents
selected full-stack projects, grouped technologies, and contact links.

## Run locally

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## Deploy

Firebase Hosting is configured to serve the production build from `dist`.

```sh
npm run build
firebase deploy --only hosting
```

The contact form submits through the existing EmailJS service. Keep its service
and template configuration aligned with the EmailJS project when updating the
form.
