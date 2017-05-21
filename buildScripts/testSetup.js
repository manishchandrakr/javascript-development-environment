// this file isn't transpiled, so must use Comman JS and ES5

// Register babel to transpile before our tests run
 require('babel-register')();

 //disable webpack feature that mocha doesn't understand
require.extensions['.css'] = function(){};
