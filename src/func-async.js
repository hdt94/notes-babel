(async function() {
  const date = await Promise.resolve(new Date());

  console.log(date.toUTCString());
})();
