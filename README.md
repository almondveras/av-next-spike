This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Demo pages

```
/     - root page
/ssg  - Static Site Generated page
/ssr  - Server Side Rendered page
/ssr-react-query  - SSR + codegen + react query
/rerender - Concurrent React demo
/rsc  - React Server Components demo
/api/revalidate - On-demand Incremental Static Regeneration (ISR)
```

## Codegen

Run `yarn generate` to run graphql codegen. Codegen config is in `codegen.yaml`.

## On demand Incremental Static Regeneration

Set an environment variable for `MY_SECRET_TOKEN` in `.env`. For example

```
MY_SECRET_TOKEN=IAMASECRETTOKEN
```

Your app that triggers revalidation can hit the revalidation API `/api/revalidate` while passing the token. When running locally, you can do something like:

```
curl --request GET \
  --url 'http://localhost:3000/api/revalidate?secret=IAMASECRETTOKEN'
```

In this demo, observe how `/ssg` page will be different everytime `/api/revalidate` is hit. See `pages/api/revalidate.ts` for the revalidation logic.

Note: Run `yarn build && yarn start` to simulate production build and execute prerendering for SSG pages. If you're running `yarn dev`, all calls will be server rendered.

## Codegen

This demo uses [GraphQL Code Generator](https://www.graphql-code-generator.com/docs/getting-started) to generate types and hooks we can use for fetching

## Known issues

Next version used is `12.1.7-canary.52` as Server Components is still unstable. Upgrading to the latest version will break Server Components.
