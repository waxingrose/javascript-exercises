const removeFromArray = function (myArray, ...arg) {

    const result = myArray.filter(filterArgs); // filterArgs() passed as ag

    function filterArgs(item) {

        return !arg.includes(item); // returns myArray that is not the items in arg

    }

    return result;

}


// Do not edit below this line
module.exports = removeFromArray;
