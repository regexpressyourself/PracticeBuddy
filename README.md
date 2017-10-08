<img alt="Practice Buddy" align="right" src="https://regexpressyourself.github.io/public/practicebuddy_logo.png" width="400px" />

# Practice Buddy

A web app to help practice modes, learn chords, and chart tunes for guitar and bass players.

[See it live and track progress!](https://smessina.com/practicebuddy)

**_Currently in development._**
* **_See [contributing](#contributing) to learn how to help_**
* **_See [the projects section](https://github.com/regexpressyourself/PracticeBuddy/projects) to track progress_**

## Table of Contents

1. [Getting Started](#getting-started)
2. [Deployment](#deployment)
2. [Built With](#built-with)
3. [Contributing](#contributing)
3. [Authors](#authors)
3. [License](#license)


## Introduction

Practice Buddy is currently in development. The final product will consist of three major components: modes, chords, and charts. The components are detailed below.

### Components

#### Modes (in active development)

Practice Buddy will allow show all seven modes and their corresponding scales. The modes are listed as intervals and actual pitches, and can be adjusted to any starting pitch.

#### Chords (planned)

Practice Buddy will map out chords for you. You can chose Ebm7, and the notes (and their intervals) will be displayed, along with a chart showing the chord on guitar or bass.

#### Charts (planned)

A database of [Nashville system](https://en.wikipedia.org/wiki/Nashville_number_system) charts will be available for creation, retrieval, update, and deletion.

Note: this feature may require adding user accounts to the application.


## Getting Started

Practice Buddy uses Webpack and NPM to build and transpile all React code into regular HTML, CSS, and Javascript.

### Prerequisites

Make sure you have NodeJS and NPM installed. [You can download Node here](https://nodejs.org/en/download/). This will install NPM as well.

You are welcome to use [Yarn](https://yarnpkg.com/en/) instead of NPM if you prefer.

### Installing

First, clone the project to a local directory.

```
   git clone https://github.com/regexpressyourself/PracticeBuddy.git && cd PracticeBuddy
```

Next, install the dependencies using NPM or Yarn.

#### Using NPM

```
   npm install
```

#### Using Yarn

```
   yarn install
```

**[Back to top](#table-of-contents)**

## Deployment

### Development Environment

To run Practice Buddy in development mode, you will need to run the `start` script declared in `package.json`.

#### Using NPM

```
   npm run start
```

#### Using Yarn

```
   yarn run start
```

   That's it! Your development server is running at [http://localhost:8080](http://localhost:8080)
   
   Webpack is configured with hot reloading, so any changes saved to source files will be immediately reflected in the browser.

### Production Build

To build a production version of the app, with all React code loaded into a bundled, minified Javascript file, you need to run the `production` script declared in package.json.

#### Using NPM

```
   npm run production
```

#### Using Yarn

```
   yarn run production
```

   This will leave you with an `index.html` and an `index_bundle.js` file in the build directory. Hosting these files from the same location will serve the production build of Practice Buddy.

**[Back to top](#table-of-contents)**

## Built With

* [React](https://facebook.github.io/react/) - The web framework that powers the site
* [Webpack](https://webpack.github.io/) - A module builder automate development and production build processes
* [React Router v. 4](https://reacttraining.com/react-router/) - Sits on top of React to enable route-based views without a backend server
* [Babel](https://babeljs.io/) - Transpiler to convert raw React code into browser-ready HTML and Javascript
* [create-react-app](https://github.com/facebookincubator/create-react-app) - Boilerplate React configuration from Facebook

**[Back to top](#table-of-contents)**

## Contributing

As always, I'm very happy to receive pull requests, questions/issues regarding code, and feature requests. 

Practice Buddy is under active development, poised for a complete feature set by January 2018. If you are interested in contributing, check out the existing [projects](https://github.com/regexpressyourself/PracticeBuddy/projects) and [issues](https://github.com/regexpressyourself/PracticeBuddy/issues), and contact me if anything sounds interesting to you.

**[Back to top](#table-of-contents)**

## Authors

* **[Sam Messina](https://www.github.com/regexpressyourself)** - *Sole Developer* 

**[Back to top](#table-of-contents)**

## License

Practice Buddy is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


**[Back to top](#table-of-contents)**

