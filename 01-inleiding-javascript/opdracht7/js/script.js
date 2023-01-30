"use strict";

const purPrice = 3.00;
let quant = 5;
let totalPrice;

{
    const profit = 2.50;
    const vat = 1.21;
    totalPrice = (purPrice + profit) * vat * quant;
}

alert(totalPrice);
