# Shopify Frontend Technical Code Interview

## Description

This is an coding interview exam for Mid-Level Shopify Frontend Developer

## Authors

Arjay D. Marquez

## Code Challenge Instruction

- Implement the first page / the homepage (slide 1) of this Invision mock up / wireframe:
  - https://projects.invisionapp.com/share/C9UI0F5VG6N#/screens
  - The web site should be responsive. Here are the mobile wireframes:
    https://projects.invisionapp.com/share/JKULP4WPRDX#/screens
- The slider should work like this
  - Example of the slider: https://www.thefarmersdog.com
- Use the assets / images provided to you (attached to the email sent to you).
- The waves are animated. That needs to be done with JavaScript

## Design System

- Bootstrap@4.6

## File Structure

- src
  - components
    - Headers
    - Modals
    - Footer
  - containers
    - Homepage
      - components
        - HomepageHeader.js
        - HomepageTitle.js
        - index.js
      - index.js
      - styles.scss
    - Signup

## Naming Conventions

- Folder and file naming - Pascal Case
- Folders and files with names should be lowercase;

- index.js
- styles.module.scss
- style.scss
- components

## Development Workflow & Notes

- Branch Naming: All small letters

1. feature/landing-page
2. bugfix/landing-page
3. hotfix/landing-page

Notes (For team purposes and readability of commit code):

- You will only branch out to development name staging
- Always commit small
- Limit your code line of 100 max of 150
- Use bootstrap components as much as possible

## Folder Use

1. pages - where the routes will be created
2. api - where the axios services
3. components - reusable
4. containers - page components
5. styles/theme - global styles
6. public - where the assets will be found

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
