### Starting
create directory:  

```sh
$ mkdir app  
$ cd.. app  
$ mkdir src  
$ mkdir public  
$ npm init --yes  
```

### Module bundler:  
A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. You may have used tools such as Browserify, Webpack, Rollup or one of many others.  

In this case we are using rollup.js  

### Rollup
Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AM.  

Developing an application is a lot easier if we split it into logically independent smaller pieces. That way we reduce the overall complexity of our code during development thus making it more approachable and maintainable. It is easier and faster for someone to join the team if he/she can focus on the smaller part instead of analyzing the entire application logic and trying to isolate a specific code block. This can dramatically increase the possibility of errors after injecting a new piece of code in the middle of it which is something we do not want.  

Rollup helps us solve the use case described above. It takes our small pieces and bundles them all together into a single code base. To do this, we can use the command line or a specific configuration file called rollup.config.js. 

When working within teams or distributed environments it can be wise to add Rollup as a local dependency. Installing Rollup locally prevents the requirement that multiple contributors install Rollup separately as an extra step, and ensures that all contributors are using the same version of Rollup.

```sh
npm i --save-dev rollup  
```

**Note:** Rollup itself processes the config file, which is why we're able to use export default syntax – the code isn't being transpiled with Babel or anything similar,** so you can only use ES2015 features that are supported in the version of Node.js that you're running**.  

## Next Generation of JavaScript
### Installing babel
In order to properly parse our module and make it compatible with older browsers, we should include babel to compile the output. If you are not familiar with it, babel is a JavaScript compiler and makes the next-gen JavaScript code cross-browser compatible by compiling it to the older version of it.

```sh
$ npm i -D @rollup/plugin-babel
```

```sh
npm i -D @babel/core @babel/preset-env
```

### Handling non-ES modules
So far our project was working without any node module dependency and the only module imported was the test one we've created. However, in the real world, this is rarely the case and our app would require a non-ES module.

The rollup-plugin-node-resolve plugin allows us to load the third-party modules and the rollup-plugin-commonjs plugin converts them into the ES6 version.

```sh
$ npm i -D @rollup/plugin-node-resolve
```

### ESLint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:  
  - ESLint uses Espree for JavaScript parsing.  
  - ESLint uses an AST to evaluate patterns in code.  
  - ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.  

```sh
$ npm i -D eslint 
$ npm i -D rollup-plugin-eslint
```
Generate a .eslintrc.json.
To make sure we only get errors we want, we need to configure ESLint first. Fortunately, we can automatically generate most of this configuration by running the following command:

```sh
$ ./node_modules/.bin/eslint --init
```


### Util npm commnads
npm uninstall -S package remove this package from dependencies.  
npm uninstall -D package remove this package from devDependencies.  
npm i -D package save this package to devDependencies.  
npm i -S package save this package to dependencies.  