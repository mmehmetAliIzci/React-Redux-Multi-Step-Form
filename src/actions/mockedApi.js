
/**
 * checkIt - Responsible for mocking 3rd tabs text response
 *
 * @param  {Object} value Sent Text value
 */
export function checkIt(value) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value && value[0] === '@') {
        resolve(value);
        return;
      }

      reject(new Error('Value should start with `@`'));
    }, 2000);
  });
}

/**
 * checkIt - Responsible for mocking 5th tabs text response
 *
 * @param  {Object} value Sent Form value
 */
export function submitIt(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(data);
        return;
      }

      reject(new Error('BANG! Try again later'));
    }, 2000);
  });
}
