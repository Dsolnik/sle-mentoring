##Yarn

* Yarn replaces NPM for installs...

* npm install --save react
	* equivalent is: yarn add react

* Yarn >> NPM; for speed! 
* Yarn is really stable, quick and great for apps
	* it sucks at building libraries...

* Yarn installs your dependcies in a flat structure and links them together.

* `yarn upgrade-reactive` - manages all packages + versions
* for global installs choose `npm install --g` over `yarn add`

#React

* Why is React useful?
    - it's a view library, in the MVC scheme
* `React.createClass()` is the blueprint for making a new component
* `React.createElement()` is instantiating a single componenet
* every Componenet in react __MUST HAVE__ a `render()` method, and it always must return markup. That `render()` should be a pure function.
* `React.createFactory()` allows you to pass in components to act as it's own div


* `npm install --global standard` standardize JS syntax, basically ESlint with standards. _Prohibits you from using semi-colons
    - to bypass global variable warnings frmo running `standard` in your terminal, you must use `/* global _var1_ _var2_ */` on the header of your file

* __ALL COMPONENTS MUST BE UPPERCASE__, bc if it was lowercase, that is what it would literally output to the DOM
## Webpack
It takes all of your modules, and puts it one bundle file for you to set out. Allows you to seperate your app into smaller modules. Webpack also does treeshaking, taking out unnecssary code you aren't using in your app.
* `npm install --global webpack@v2.1.0-beta.25`
* `webpack js/ClientApp.js public/bundle.js` to create a bundle from your app
    - then in your `index.html` or w/e main view you have, you can do ` <script src="public/bundle.js"></script>` to incorporate the bundled modules
* __PRO-TIP__: `webpack --watch` to have it re-build everytime you make a change
* __PRO-TIP #2__: `npm run build -- --watch`

##Babel 
essentially a JSON file for your transformations
* Babel is essentially only presets + plugins where presets are a group of plugins
* in your presets for `["es2015", {"modules": false}` otherwise, babel will take care of this plugin, but we want Webpack 2.0 to take care of this
* `webpack --module-bind='js=babel' js/ClientApp.js public/bundle.js` basically tells us that everytime you run into JS, transpile it through babel.

##History of JSX + React
Facebook launched React. 
