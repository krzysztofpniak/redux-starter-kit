## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

## Building and Running Production Server

```bash
npm run build
npm run start
```

## Deployment on Heroku

To get this project to work on Heroku, you need to:

1. `heroku config:set NODE_ENV=production`
2. `heroku config:set NODE_PATH=./src`
3. `heroku config:set NPM_CONFIG_PRODUCTION=false`
  * This is to enable webpack to run the build on deploy.

The first deploy might take a while, but after that your `node_modules` dir should be cached.
