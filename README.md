# Next.js + Typescript + Express Server

While evaluating [next.js](https://github.com/zeit/next.js) for building apps I wanted a starting point that included an [Express](https://expressjs.com/) server for the API and Typescript as the primary language instead of Javascript.  This project is the boilerplate for that app.

You can deploy this app either to [Zeit](https://zeit.co/) via the `now` command or to [Heroku](https://www.heroku.com).

*Features*

* next.js
* Typescript
* Express API Server
* Static file serving
* Mocha Tests

## Running
*Dev Server*
```sh
npm i
npm run dev
```

*Production Server*
```sh
npm i
npm run build
npm run start
```

## Notes
* We might need to use this [.babelrc](https://github.com/zeit/next.js/blob/canary/examples/custom-server-typescript/.babelrc) though I swear I read it's been fixed and our current
* Great [write up](http://artsy.github.io/blog/2017/11/27/Babel-7-and-TypeScript/) on creating babel7/typescript app
* To fix TS2339:Property 'jsx' does not exist on type  'DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>'. [From](https://github.com/zeit/styled-jsx/issues/90) `npm i --save-dev @types/styled-jsx`
* [SASS Support](https://medium.com/@miiny/setup-a-server-rendered-reactjs-application-with-next-js-typescript-sass-7cd3e7e79706) - Might want to use it vs styled-jsx


MIT License
