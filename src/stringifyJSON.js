// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // convert all elements that are not objects or arrays into string
    //strings
  var output = '';
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
    //numbers
    //booleans

  if ((typeof obj === 'number') || (typeof obj === 'boolean')) {
    return `${obj}`;
  }
    //null
  if (obj === null) {
    return `null`;
  }
    //undefined, functions
  if ((typeof obj === 'undefined') || (typeof obj === 'function')) {
    return undefined;
  }

  // if element is an array
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      // return stringifyJSON on element
      if (obj.length === 0) {
        return `[]`;
      }
      let mapped = obj.map((piece) => {
        if ((typeof piece === 'function') || (typeof piece === 'undefined')) {
          return stringifyJSON(null);
        } else {
        return stringifyJSON(piece);
        }
      })
      return '[' + mapped + ']';

      // return output
    }
      //else if element is an object
      var keys = Object.keys(obj)
      if ((keys.length === 0) ||(obj[keys[i]] === undefined)){
        return '{}'
      }else {
      for (var i = 0; i < keys.length; i++) {
        return '{' + stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + '}'
      }

        // return stringifyJSON on element
    }


  }
  return output;
};