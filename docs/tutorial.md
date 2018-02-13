# passthrough-object

# prerequisites

### for NodeJs
     var Path=require("passthrough-object");

### for browser

    <script src="node_modules/"passthrough-object/distrib/"passthrough-object.min.js"></script>


# Methods
## get

    Path.get(object, path, defaultValue)
    
    object (Object):
    an object

    path (String):
    path to pass through object. It's a string with names of properties separated with a dot.
    
    defaultValue (Object) : default value for sub-property if not found with path
      
Example

    var obj = { a: 1, b: { c: 3, d: 4, e: [{ f: '5', g: '6' }, { f: '7', g: '8' }, { f: '9', g: '10' }] } };

    console.log(Path.get(obj, "b.d", null)); 
    // 4

    console.log(Path.get(obj, "b.e.0.f", null));
    // 5

    console.log(Path.get(obj, "b.e[0].f", null));
    // 5

    console.log(Path.get(obj, "b.e", null));
    // [ { f: '5', g: '6' }, { f: '7', g: '8' }, { f: '9', g: '10' } ]


# no need more for modify

Example

    var be = Path.get(obj, "b.e", {});
    be.push({ f: "11", g: "12" });

    console.log(be);
    /* [    { f: '5', g: '6' },
            { f: '7', g: '8' },
            { f: '9', g: '10' },
            { f: '11', g: '12' } ]
     */

    console.log(Path.get(obj, "b.e", {}));
     /*
        [   { f: '5', g: '6' },
            { f: '7', g: '8' },
            { f: '9', g: '10' },
            { f: '11', g: '12' } ]
     */