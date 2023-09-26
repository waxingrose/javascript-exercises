const sumAll = function (first, last) {
    let total = 0;

    if (first >= 0 && last >= 0 && typeof(first) == "number" && typeof(last) == "number") {
        if (first <= last) {
            while (first <= last) {
                total += first;
                first++;
            }
        } else {
            while (first >= last) {
                total += first;
                first--;
            }
        }
        return total;
    } else {
        return "ERROR";
    }
}

    // Do not edit below this line
    module.exports = sumAll;
