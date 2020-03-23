// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // initialize an empty array to push elems to
  let elemsWithClass = [];
  // create a function that returns childnodes
  let testClass = function(node) {
    console.log (node.classList)
    if(node.classList && node.classList.contains(className)){
      elemsWithClass.push(node);
    }
    if(node.hasChildNodes()){
      node.childNodes.forEach((child) => {
        testClass(child);
      })
    }

  }
  // test for the classname on each node

  // push to array the elems that pass the test

  // if there are child nodes on the current elem run the function again on each child node
  testClass(document.body);
  // return the array
  return elemsWithClass;
};