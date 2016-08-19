# Angular Seed using <img alt="gulp" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" height="80"/> 

## App Structure

Let's chuck it! I am sick of researching about the most correct way of organizing my angular app, specifically the directory structure of the app. I have looked at [John Papa's Angular1 style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1#modules) and I feel that the following structure is good enough. If you have any suggestions kindly add an issue with this repository or better still, submit a pull request.

```
.
├── README.md
├── bower.json
├── gulpfile.js
├── package.json
├── node_modules/
└── src
    ├── app
    │   ├── app.module.js
    │   ├── config/
    │   ├── directives/
    │   ├── modules/
    │   ├── providers/
    │   └── services/
    ├── index.html
    ├── bower_components/
    └── resources
        ├── css
        ├── images
        └── js
```

Little bit more about the directory structure.


1. **app/**: this folder is the container for the angular app, all angular related code goes in here.
2. **index.html**: the shell of the application, it loads all the angular javascripts, all app javascripts, external javascript libraries like underscore (mixing jQuery with angular is not a good decision) and stylesheets.
3. **app.module.js**: entry point for the application. it initializes the application with all the relevant dependencies using dependency injection. According to John Papa, no need to create a variable, instead use [setters and getters](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y021).
4. **app/directives**: all the directives are to be created here. Each directive should be contained in its own folder and can contain views.
5. **app/modules**: these are smaller sub applications, which are injected into `app.module.js` and each is contained in its own folder which in turn is constituted by views and controllers etc.
6. **app/services** & **app/providers**: individual services and providers go in here.
7. **config**: this directory contains configurations including routes and global variable definitions etc.
8. **resources**: custom css and javascripts(which are part of neither bower nor angular) as well as any images go in here.


## Installation and Serving

```
npm install
```

will install all the node modules as well as *bower components*.
However if you explicitly want to install bower components use

```
bower install
```

use [http-server](https://www.npmjs.com/package/http-server) to serve the application.
serve `src/` using

```
http-server src/
```

## Building

Gulp has been used for building process. The following gulp-modules have been used:
1. [gulp-if](https://www.npmjs.com/package/gulp-if)
2. [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
3. [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
4. [gulp-useref](https://www.npmjs.com/package/gulp-useref)

use

```
gulp build
```

to build the project, it mimifies, concats and injects newly created javascripts and stylesheets into index.html

the resulting directory structure of `dist/` looks like this:
```
dist/
├── index.html
└── resources
    ├── css
    │   └── index.css
    ├── images
    │   └── picture.jpg
    └── js
        └── index.js
```
checkout [gulp-useref](https://www.npmjs.com/package/gulp-useref) for more information.

you can serve dist/ using

`http-server dist/`

## Todo

1. Add karma and jasmin test support using gulp
2. Continuous css preprocessor compilation using gulp
3. provision to upload to s3 bucket while commiting
4. modify useref to append timestamp/commit-stamp for better http and cdn caching.
