// these tasks is for the assignment not for the session on functions
// task 1 perform operation on an array using functions passed as arguments


function performAction (array , action) {
    return array.map((item) => action(item));
}
function action1 (item) {
    return item * 2;
}
function action2 (item) {
    return item * item;
}

// function action3 (item) {  // We wont need this as u dont use it in anything
//     return ??;
// }

const array = [1 , 2 , 3 , 4 , 5];
const array2 = performAction(array , action1); // [2 , 4 , 6 , 8 , 10]
const array3 = performAction(array , action2); // [1 , 4 , 9 , 16 , 25]
const array4 = performAction(array , item => item * 3); // [3 , 6 , 9 , 12 , 15]


// ========================================================================================================
// task 2 how to perform series of operations on an array using functions passed as arguments

function performActions (array , operations) {
    operations.map((operation) =>array = operation(array));
    return array;
}
function operation1 (array) {
    return array.map((item) =>item * 6);
}
function operation2 (array) {
    return array.filter((item) => item >= 24);
}
function operation3 (array) {     // I dont need this function actually
    return array.map((item) => item );
}

const arr = [1 , 2 , 3 , 4 , 5 , 6];
const arr2 = performActions(arr , [operation1 , operation2 , operation3]); // [24 , 30 , 36]
