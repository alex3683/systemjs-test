System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "retainLines": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "laxar-application/*": "*",
    "laxar-application-dependencies": "var/flows/main/dependencies"
  },

  map: {
    "angular": "npm:angular@1.5.0",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "json": "npm:systemjs-plugin-json@0.1.0",
    "laxar": "github:LaxarJS/laxar@2.0.0-alpha.0",
    "laxar-angular-adapter": "github:LaxarJS/laxar-angular-adapter@0.2.0",
    "laxar-patterns": "github:LaxarJS/laxar-patterns@2.0.0-alpha.0",
    "laxar-uikit": "github:LaxarJS/laxar-uikit@2.0.0-alpha.0",
    "systemjs-debugger": "github:peteruithoven/systemjs-debugger@0.0.3",
    "whatwg-fetch": "npm:whatwg-fetch@0.11.0",
    "github:LaxarJS/laxar-angular-adapter@0.2.0": {
      "angular": "npm:angular@1.5.0",
      "angular-sanitize": "npm:angular-sanitize@1.5.0",
      "laxar": "github:LaxarJS/laxar@2.0.0-alpha.0"
    },
    "github:LaxarJS/laxar-patterns@2.0.0-alpha.0": {
      "fast-json-patch": "npm:fast-json-patch@0.5.6"
    },
    "github:LaxarJS/laxar-uikit@2.0.0-alpha.0": {
      "bootstrap-sass-official": "github:twbs/bootstrap-sass@3.3.6",
      "font-awesome": "npm:font-awesome@4.4.0",
      "laxar": "github:LaxarJS/laxar@2.0.0-alpha.0",
      "moment": "npm:moment@2.11.2"
    },
    "github:LaxarJS/laxar@2.0.0-alpha.0": {
      "jjv": "npm:jjv@1.0.2",
      "jjve": "npm:jjve@0.5.1",
      "page": "npm:page@1.6.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular-sanitize@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jjv@1.0.2": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:moment@2.11.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:page@1.6.4": {
      "path-to-regexp": "npm:path-to-regexp@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-to-regexp@1.2.1": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
