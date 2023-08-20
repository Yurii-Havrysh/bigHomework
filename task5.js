function throttle(func, interval) {
    let lastExecution = 0;
    let timeoutId;
  
    return (...args) => {
        const now = Date.now();
  
        if (now - lastExecution < interval) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastExecution = now;
                func.apply(this, args);
            }, interval);
            } else {
                lastExecution = now;
                func.apply(this, args);
            }
        };
}
  
function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}
  
const throttledScrollHandler = throttle(onScroll, 1000);


window.addEventListener("scroll", throttledScrollHandler);
