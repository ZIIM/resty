# RESTY

## Getting Started

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your
environment.
Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your
Editor (not mandatory).

### Install

    git clone https://github.com/ZIIM/resty.git
    cd resty
    npm install

### Configure app

No Current Environmental Variables

### Start & watch

    npm run dev
    npm start

### Architecture

```bash
├── .eslintrc.cjs
├── .github
│   └── workflows
│       └── node.yml
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.scss
│   ├── App.tsx
│   ├── Components
│   │   ├── Footer
│   │   │   ├── Footer.scss
│   │   │   ├── Footer.test.tsx
│   │   │   └── index.tsx
│   │   ├── Form
│   │   │   ├── Form.scss
│   │   │   ├── Form.test.tsx
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   ├── Header.scss
│   │   │   ├── Header.test.tsx
│   │   │   └── index.tsx
│   │   └── Results
│   │       ├── Results.scss
│   │       ├── Results.test.tsx
│   │       └── index.tsx
│   ├── __tests__
│   │   └── setup.ts
│   └── main.tsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Languages & tools

- TypeScript
- Vite
- React
- Vite Test

## Change Log

1.0.0

## Collaborators

[Brock Britton](https://github.com/brockbritton)

[Isai Chaidez](https://github.com/Arvoya)
