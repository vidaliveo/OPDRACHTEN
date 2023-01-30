"use strict";

const purPrice = 3.00;
const profit = 2.50;
const vat = 1.21;
let quant = 5;

const totalPrice = (purPrice + profit) * vat * quant;

alert(`€ ${totalPrice}`);
