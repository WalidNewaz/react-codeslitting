/**
 * @description Function to sleep for a certain amount of time
 * @param {*} ms
 * @returns
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const delayPromise = (promise, ms = 3000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  }).then(() => promise);
};
