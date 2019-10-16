const promise = Promise.resolve(new Date());

promise.then(function(date) {
  console.log(date.toUTCString());
});
