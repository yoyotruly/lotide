const head = require("../head");


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "World"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
