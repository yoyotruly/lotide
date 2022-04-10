const assertEqual = require("../assertEqual");

assertEqual(2.1, 2.1);
assertEqual(-2, 0);
assertEqual(true, true);
assertEqual(true, false);
assertEqual("hello", "hello");
assertEqual("hello", "hi");
assertEqual(undefined, undefined);
assertEqual(null, null);
assertEqual(undefined, null);

