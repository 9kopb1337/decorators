function throttle(func, timeout) {
  let lastCall;
  return function (args) {
    const callTime = Date.now();
    if (lastCall === undefined || callTime - lastCall > timeout) {
      lastCall = callTime;
      func(args);
    }
  };
}
