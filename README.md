# Angular micro planet starter kit

This repository is angular micro front-end build project dependency ngx-planet library, this project can help you start the micronization angular project in seconds.

## Feature

- [Angular 8.2](https://angular.io/)
- [Angular CLI](https://github.com/angular/angular-cli)
- [Ngx-planet](https://github.com/worktile/ngx-planet)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently#readme)

## Getting start

```
git clone https://github.com/HsienW/angular-micro-planet-starter-kit.git
cd  angular-micro-planet-starter-kit
npm install
npm start 
```

## Development
- Run `npm start` for a dev server. Navigate to `http://localhost:3000/`.
- Portal app default running to `http://localhost:3000/`.
- Sub app1 default running to `http://localhost:3001/`.
- Sub app2 default running to `http://localhost:3002/`.
- When you only want to run portal + some sub app. Please use `:app-name` (ex:`start:app1`) for details, see package.json.
- The app will automatically reload if you change any of the source files.

## Code scaffolding
- Run `ng generate component component-name` to generate a new component.
- You can also use `ng generate directive|pipe|service|class|module`.

## Build
- Run `npm build` to build the all project. 
- The build artifacts will be stored in the `dist/` directory.
- Sub app use the `:prod` flag for a production build (ex:`build:app1:prod`).
- Build details please see package.json.
- The app will automatically reload if you change any of the source files.

## Running unit tests
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Feature help
- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
