# fiber-css
An atomic css framework focused on responsive design

## Getting started
Fiber-css is available as an npm module:

`$ npm install fiber-css`

### Why use fiber-css?

+ prioritizes responsive design, particularly responsive typography
+ uses only rem values
+ uses intuitive naming conventions
+ is also available as separate pre-compiled modules
+ makes complex responsive patterns easy to reason about
+ leaves semantic abstractions to other frameworks (e.g. React) and only focuses on style properties

### Setup

#### Precompiled
Use either the complete fiber-css suite from `css/fiber.css` or the minified version `css/fiber.min.css`, or use one or more separate modules (e.g. `css/modules/typography.css`).

#### Custom build
To customize or extend fiber-css, clone this repo     
    
    $ git clone https://github.com/zcreativelabs/fiber-css.git
    $ cd fiber-css
    $ npm install
    
make your changes, and build your custom version of fiber-css:
    
    $ npm run css:prepare

To learn more about building a custom css pipeline check out [How to set up a postcss pipeline with variable sharing in gulp](https://medium.com/@zimrick/how-to-set-up-a-postcss-pipeline-with-variable-sharing-in-gulp-4e77624cc749).

## License
MIT licensed. Copyright (c) Richard Zimerman 2017. See [LICENSE.md](https://github.com/zcreativelabs/fiber-css/blob/master/LICENSE) for more details.
