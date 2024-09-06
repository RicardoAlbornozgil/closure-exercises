function curriedAdd(total = 0) {
    if (arguments.length === 0) return total;  // Check if called with no arguments initially.
    return function next(num) {
        if (num === undefined) return total;
        total += num;
        return next;
    };
}

module.exports = { curriedAdd };
