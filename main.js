#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    { message: "select your first number", type: "number", name: "firstnumber" },
    { message: "select your second number", type: "number", name: "secondnumber" },
    {
        message: "select your operator",
        type: "list",
        name: "operator",
        choices: ["add", "sub", "divide", "multiply"],
    },
]);
if (ans.operator === "add") {
    console.log(ans.firstnumber + ans.secondnumber);
}
else if (ans.operator === "sub") {
    console.log(ans.firstnumber - ans.secondnumber);
}
else if (ans.operator === "divide") {
    console.log(ans.firstnumber / ans.secondnumber);
}
else if (ans.operator === "multiply") {
    console.log(ans.firstnumber * ans.secondnumber);
}
else {
    console.log("please select a valid number");
}
