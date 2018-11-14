# Planning

* Alternate lean journal log instead of GitHub issue tracking/project management tab (e.g. hn algolia paginator repo)
* /Proposed task estimation
* 5:30 am
* Alternate lean journal log instead of GitHub issue tracking/project management tab (e.g. hn algolia paginator repo)
* 30 minutes planning project structure
* 15-30 minutes discovering and resolving emergent bug November for new Angular 6 projects `https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30310` for Jasmine testing
* 30 minutes mock TrainingEvents API
* 10 minutes master events list component display
* 30 minutes Geolocation
* 10-20 minutes Check training events by city for user-relevant data.
* 10 minutes event details working properly^
* 30 minutes Google Maps with user location + markers. Event details popup.
* 30 minutes tests + … hours if unintended bugs found. Finalising
* ++ fun time CI/CD, repeatable visual studio workspace config to source control, Docker, Travis CI, AWS CodePipeline,
* +++ Better TSLint rules - Microsoft SDL

1. Create configured Angular project
  a. `ng new UserLocationTrainingEventMapRecommendations --routing --style=scss`
* Added notes:
* * Update `package.json` to avoid emergent new Angular 6 project bugs with 
  Jasmine/Typescript version compatibility
* * `npm install --save @types/googlemaps`
1. Create data model interface (or class) for `app/models/TrainingEvent.ts`
  a. `models/TrainingEvent` interface
3. Create seed data
  a. `seed/SeedTrainingEvent`
4. `ng generate service services/MockTrainingEventApi --dryRun`
  a. (i.e. MockTrainingEventApiService)
5. `ng generate service services/Geolocation`
  a. For geo utilities such as distance calculation
  b. Maybe user location here as well makes more sense with Google Maps integration
6. (maybe in addition to Geolocation) `ng generate service services/UserLocation` Abstract user location?
    i. e.g. maybe some integration with Google Maps. Web HTML5 Geolocation API?

7. Create components (e.g. file structure app/components, app/services)
    a. MasterEventsListPage   (// would be a `Page` if using Ionic)
      i. `Ng generate component pages/MasterEventsListPage`
        1) EventDetail
          a) `ng generate component components/EventDetail`
    b. MapViewPage
      i. `Ng generate component pages/MapViewPage`
        1) Have all the events as markers?
          a) EventDetail
    c. Navigation component
8. Google Maps implementation

  • Add to router for page routing (if needed)
  • Add any additional tests (if not TDD already)
    ○ Unit tests (Karma Jasmine)
    ○ E2E tests (Protractor)
\>80% Test coverage

## GO1-Front-End-Test

Files for GO1 Front End tech test.

## Front-end Scenario

Build a slim application to retrieve, filter and display training events based on a user's location and the current date.

## Requirements

* You can use any javascript framework.
* Retrieve events data using the supplied mock api (or build your own for bonus points).
* If you wish to build your own, the data for events should contain:
  * Title
  * DateTime in ISO 8601 format
  * Image url
  * Available Seats
  * Location (City)
  * Description

* Your application should:
  * Show the next five events in a list, ordered from soonest to latest.
  * The event should show the course image, title, date and location.
  * Clicking on the event should open a new interface with the full event's information.
  * [Transpile ES6](https://css-tricks.com/transpiling-es6/) (you'll need this to use the supplied mock api)

* You should include some test coverage for this application.
* Commit your work to a repository regularly (and make it public or send us the .git directory)
* Record how long you work on this application (be honest, accurate task estimation is important in this industry)

## Suggestions

An application like this can be deployed quickly using [Create-react-app](https://github.com/facebook/create-react-app), which will supply the packaging, test framework and transpiling needed.

However do not feel constrained by this! If you are more confident in another framework (eg. React, or Angular, Vue), build this application in whatever you like to work with.

You will need to calculate distance between positions to achieve the required functionality.  A library such as [TurfJS](http://turfjs.org/) will allow you to do make these calculations easily.

## Extra Credits

* Include a map library to display location/events.
* Package your application in a Docker container.
* Achieve >80% test coverage.
* _Impress us by adding something amazing that's not documented above._

## UserLocationTrainingEventMapRecommendations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
