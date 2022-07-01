function throttle(f, t) {
    let lastCall;    
    return function (args) {
        const callTime = Date.now();
        if (lastCall === undefined || (callTime - lastCall) > t) {
            lastCall = callTime;
            f(args);
        }
    }
}