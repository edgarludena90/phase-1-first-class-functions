function receivesAFunction(callback){
callback()
}
function returnsANamedFunction(){
  return function whyNot(){
    console.log('hello')
  }
}
function returnsAnAnonymousFunction() {
  return () => console.log("this is an anonymous function");
}

