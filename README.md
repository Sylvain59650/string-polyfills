# string-polyfills

<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/string-polyfills.png?branch=master)](https://travis-ci.org/Sylvain59650/string-polyfills)
![version](https://img.shields.io/npm/v/string-polyfills.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/string-polyfills.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/string-polyfills.svg)
![minified](https://img.shields.io/bundlephobia/min/string-polyfills.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)

  <a target="_blank" title="stats" href="https://www.jsdelivr.com/package/npm/string-polyfills"><img src="https://data.jsdelivr.com/v1/package/npm/string-polyfills/badge" /></a>
    <a target="_blank" title="script online" href="https://cdn.jsdelivr.net/npm/string-polyfills"><img src="https://img.shields.io/badge/cdn-jsdeliv-black.svg" /></a>
    <img src="https://img.shields.io/npm/l/string-polyfills.svg" />
    <img src="https://hits.dwyl.com/Sylvain59650/string-polyfills.svg" />
 </div>

 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > string-polyfills](https://github.com/Sylvain59650/string-polyfills/blob/master/README.md)
</div>


## Goal

The purpose of this module is to gather all the polyfills on the strings in a single module without dependencies.

## Availables operations
- endsWith
- startsWith
- fromCodePoint
- includes
- padEnd
- padStart
- repeat
- substr
- trim
- trimLeft
- trimRight

## Installation

    npm install string-polyfills --save

or

    yarn add string-polyfills --save


## prerequisites

### for browsers after install

    <script src="node_modules/string-polyfills/distrib/string-polyfills.min.js"></script>

### for browsers without install

    <script src="https://cdn.jsdelivr.net/npm/string-polyfills"></script>

**Note** tests with IE 11, IE 10, Chrome 64, Firefox 58

# Author & License
- Sylvain Longepée
- Released under MIT license
- Based on separated scripts referenced at [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/fromCharCode)
 