# AngularYoutubeClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Angular. Intro task

### Getting started
- Install *@angular/cli* package. It's highly recommended to use *SCSS* as the default stylesheet
- Use ng-cli to create a new project
- Explore the generated project structure
- https://github.com/rolling-scopes-school/tasks/edit/master/tasks/angular/intro.md

## Angular. Components. Directives & Pipes task

### Task requirements
The main goal of this task is to implement the main page of the YouTube client app.
You are to enrich previously generated components with necessary functionality and markup.

You can use any UI frameworks/libraries to simplify (facilitate) the creation of your markup. It's recommended to use Angular Material as it’s fully integrated with Angular.
- https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/components-directives-pipes.md

## Angular. Modules & Services. Routing task
The objective of the task is to implement new pages using modules, services and routing features. So, your app will contain the following pages:
- Login page
- 404 page
- Main page (which is implemented before)
- Detailed information page
- https://github.com/rolling-scopes-school/tasks/edit/master/tasks/angular/modules-services-routing.md

## Angular. RxJS & Observables. HTTP task
In the scope of the task, you are to implement some features using RxJS. In addition, the goal is to start using real YouTube API for requesting data in the app.

### Task requirements

#### Samples of YouTube REST API requests:
    - https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js
    - https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics
    - How to get an API key - https://www.youtube.com/watch?v=JbWnRhHfTDA
    - You can find a more detailed documenation here - https://developers.google.com/youtube/v3/
    - https://github.com/rolling-scopes-school/tasks/edit/master/tasks/angular/rxjs-observables-http.md
    
## Angular. NgRX
The objective of the task is to implement `Admin page`. So, your entire app will contain the following pages:
- Login page
- 404 page
- Main page
- Detailed information page
- Admin page
- https://github.com/rolling-scopes-school/tasks/edit/master/tasks/angular/NgRX.md
