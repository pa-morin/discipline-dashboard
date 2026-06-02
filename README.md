# Discipline Dashboard

A personal self-improvement dashboard for tracking weekly goals, non-negotiables, journal entries, finances, motivation, faith, history, customization, and AI-powered weekly reviews.

## Setup

Install dependencies:

```bash
npm install
```

## Run Locally

For the static dashboard, open `index.html` in your browser or serve the folder with any local static server.

For the AI weekly review Netlify Function, run the project with Netlify Dev:

```bash
netlify dev
```

Then open the local URL Netlify provides.

## Environment Variables

Create a local `.env` file for development if you want to use the built-in AI weekly review. Do not commit `.env` files.

```bash
OPENAI_API_KEY=your_key_here
```

The app still works without `OPENAI_API_KEY`; the AI review request will fail gracefully and the manual copy-prompt fallback remains available.

## Testing

Run the Playwright test suite:

```bash
npm test
```

## Deployment Notes

This project is configured for Netlify. Add `OPENAI_API_KEY` in Netlify under:

Site settings -> Environment variables -> Add a variable

Use `OPENAI_API_KEY` as the key name and paste your OpenAI key as the value.
