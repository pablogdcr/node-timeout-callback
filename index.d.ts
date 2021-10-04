declare module 'timeout-callback' {
  interface Options {
    isolateFirstArgForTimeoutError: boolean,
  }

 export type Callback<T> = (timeout: boolean | undefined, res: T | Error) => void;

  /* Kill the callback function at the end of the timeout. Default timeout: 10 seconds. */
 function timeoutCallback(callback: Callback, timeout?: number, options?: Options): Callback;

 export = timeoutCallback;
}
