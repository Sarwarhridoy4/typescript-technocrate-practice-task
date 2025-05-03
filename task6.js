{
    //
    var sumAll = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (total, num) { return total + num; }, 0);
    };
    // Example usage:
    var result = sumAll(1, 2, 3, 4, 5);
    console.log("The sum is: ".concat(result));
    //
}
