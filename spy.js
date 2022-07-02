function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(...args);
    return func.apply(this, argument);
  }

  wrapper.calls = [];

  return wrapper;
}
