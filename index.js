"use strict";

const defaultOptions = {
    isolateFirstArgForTimeoutError: true,
};

function  timeoutCallback(callback, timeout = 10000, options = defaultOptions) {
  let called = false;

  options = { ...defaultOptions, ...options };

  let interval = setTimeout(
    function() {
      if (called) return;
      called = true;
      callback(new Error("callback timeout"));
    },
    timeout
  );

  return function(...args) {
    if (called) return;
    called = true;
    clearTimeout(interval);

    if (options.isolateFirstArgForTimeoutError) {
      args.unshift(null);
    }

    callback(...args);
  };
};

export default timeoutCallback;
