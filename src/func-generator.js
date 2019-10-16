function* generator() {
  const initial = 0;
  const result = yield initial;
  const final = initial + result;

  return final;
}

const g = generator();
const initial = g.next();
console.log(initial);
console.log(g.next(4));
