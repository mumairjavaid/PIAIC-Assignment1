// Question # 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var func = function (array, index, value) {
    array.splice(index, 0, value);
    return array;
};
console.log(func([1, 2, 3, 4], 2, 56));
var cart = [];
function addItem(item) {
    cart.push(item);
}
function removeItem(itemIndex) {
    cart.splice(itemIndex, 1);
}
function updateQty(itemIndex, newQty) {
    var updatedQtyItem = __assign(__assign({}, cart[itemIndex]), { qty: newQty });
    cart.splice(itemIndex, 1, updatedQtyItem);
}
addItem({ id: '1', name: 'Facewash', price: 200, qty: 2 });
// addItem({id: '2', name: 'Shampoo', price: 5, qty: 1});
console.log("Item added", cart);
removeItem(0);
console.log("Remove Item", cart);
updateQty(0, 5);
console.log("Update Item", cart);
// Question # 3
var i = 0;
while (i <= 25) {
    console.log(i);
    i++;
}
// Question # 4
var k = 0;
while (k < 20) {
    if (k % 2 == 0) {
        console.log(k);
    }
    k++;
}
// Question # 5
var factorial = 1;
var fact = function (num) {
    if (num == 0) {
        return 1;
    }
    else {
        while (num > 0) {
            factorial *= num;
            num--;
        }
        return factorial;
    }
};
console.log(fact(5));
// Question # 6
var array_num = [12, 3, 4, -2, -5, -56, 77, 83, 12];
for (var i_1 = 0; i_1 < array_num.length; i_1++) {
    if (array_num[i_1] < 0) {
        array_num.splice(i_1, 1);
        i_1--;
    }
}
console.log(array_num);
// Question # 7
var num_array = [12, 3, 4, 2, -5, 12];
var j = 0;
var sum = 0;
var sum_nums = function (parameter) {
    while (j < parameter.length) {
        sum += parameter[j];
        j++;
    }
    return sum;
};
console.log(sum_nums(num_array));
// Question # 8
var convertTemperature = function (celsiusT) {
    var i = 0;
    var convertedT = [];
    while (i < celsiusT.length) {
        var result_1 = (celsiusT[i] * (9 / 5)) + 32;
        convertedT.push(result_1);
        i++;
    }
    return convertedT;
};
var result = convertTemperature([37, 38.8, 3]);
console.log(result);
