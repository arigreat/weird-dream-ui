export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};

export const immediateDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout | null = null;
  let shouldExecute = true;
  
  return function(this: any, ...args: Parameters<T>) {
    if (shouldExecute) {
      fn.apply(this, args);
      shouldExecute = false;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      shouldExecute = true;
    }, wait);
  };
};

export default debounce;