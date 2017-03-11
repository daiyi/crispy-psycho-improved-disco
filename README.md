This is chrispy-psycho-improved-disco, the partially rougelike, partially jump
to the right let's make a game of daiyi and kim.

---

dear kim,

hello from brooklyn! today the city was dusted by light snow, which was only shocking because yesterday I was riding around manhattan in a tshirt and getting mildly sunburned by the sunlight bouncing off the hudson. I drank two litres of tea and fruitlessly attempted to rig hot reloading into this project and it only took me like 2 hours before I whispered "premature optimisation" and went with this adapted boilerplate instead. :D

Things to install:

- node.js >6
- npm

To get this project up:

- clone this repo
- run `npm i` (aka `npm install`) in the folder

to serve:

- `npm run dev`

#### What's going on here??

So `npm run` executes npm scripts as defined in `scripts.dev` in `package.json`. If you look in `package.json` the dev script is just...... `webpack`.

`npm run dev` runs `node_modules/.bin/webpack`.

(npm automatically looks in `node_modules/.bin/` for modules, but if you run them manually from the terminal you have to point to it manually. or install globally: `npm i -g webpack`). (I promise npm scripts are usually more useful than that if you want to run a more complicated set of commands :'D )

#### ok so what is `webpack`??

Most fanfare and drama over javascript build tools are essentially trying to achieve this thing: concatenate everything down to one html, css, and js file, import the css and js into the html page, and that's it that's your project. Our game is great because there's no css so we don't have to worry about any of that stuff :D The ONE THING we need to do is bundle all the js files (in `src`) together.

*Webpack* is a taskrunner. It also bundles. It looks at `webpack.config.js` to figure out what it's supposed to do. Most of it is magic and plugins but it does these concrete things:

- takes the entry point aka root of the file dependency tree and crawls the tree and concatenates a huge js file, puts it into `dist`. Our entry point is `src/main.js`. This is also where we set up the game, add the game states, instantiate the game
- runs all the javascript though *Babel* which is a tool that transpiles the es6 (new js standard with classes and fat arrows and stuff) we are writing into es-old so that browsers can understand
- gets browsersync to serve the project
- watches `src` for changes, and upon changes recompiles and and uses browsersync to reload the page (this also means you gotta manually reload when updating other folders, for example, image assets)
- runs our code through es-lint, a javascript linter (I think?? I need to check the config, it might need more configgin)
-

If you look at `devDependencies` in `package.json` you'll see all those package names should now look familiar :D?? A lot of them are babel or webpack plugins.

Our one actual dependency is `phaser-ce`: phaser community edition.

#### some lies

If you closely inspected `dist` or `index.html` you may have noticed that there isn't one js file THERE'S ACTUALLY TWO. I HAVE DECEIVED YOU FOR CONVENIENCE.

One speedy trick people like to do is separately bundle libraries and project code, because then you can watch/transpile just your project code since the library stuff isn't going to change. So there's `bundle.js` (our code) and `vendor.js` (libraries: phaser and its dependencies).

#### ? what's the \*.\*.map files in `dist`?

Those are sourcemaps, which is telling your browser how the original js files looks before getting bundled, so that when you get stack traces your browser debug tools know how to show you the readable, pre-concatenated version of your code instead of crazy spaghetti monster.

#### ok I think that's it

let me know if any of that was opaque and needs additional explanation/pointing to strategic tutorials or google searches!! \o/ \o/ <- that's us


<3,
daiyi
