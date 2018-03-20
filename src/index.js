function debounce(func, wait, immediate, ...args) {
  let timeout;
  return () => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const debounced = (dispatch, func, time, ...args) => (
  debounce(() => dispatch(func(...args)), time)
);

/**
* Debounce redux dispatched actions and thunks
* @param {function} func function to be debounced
* @param {number} debounce delay
* @param {*} args any additional arguments the defined function requires
*/
export default (func, time, ...args) => dispatch => debounced(dispatch, func, time, ...args)();
