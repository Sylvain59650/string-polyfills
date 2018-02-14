# string-polyfills

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


### for NodeJs
     require("string-polyfills");

### for browser

    <script src="node_modules/string-polyfills/distrib/string-polyfills.min.js"></script>

**Note** tests with IE 11, IE 10, Chrome 64, Firefox 58