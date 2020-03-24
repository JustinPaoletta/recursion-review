// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // convert all elements that are not objects or arrays into string
  //strings
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

  if (typeof obj === 'object' && Array.isArray(obj)) {
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

  }

  //else if element is an object

  if (typeof obj === 'object'){

    let objArr = [];

    let myKeys = Object.keys(obj);

    myKeys.forEach((key) => {
      if( typeof obj[key] === 'function' || obj[key] === undefined){
        delete obj[key];
      }
    });

    if(myKeys.length === 0){
      return '{}'
    }else{
      for(let key in obj){
        objArr.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
      }
      return `{${objArr}}`
    }
  }

};