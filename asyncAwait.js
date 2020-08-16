// example Async/Wait

async function foo() {
  const result = await 42;
  return result;
}

foo()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
