let userName = "";
let userGender = "";

userName = prompt("Enter your name:");
userGender = prompt("Enter your gender (male/female):").toLowerCase();
let title = " ";
let check = true;
while (check) {
    if (userGender === "male") {
        title = "Mr.";
        check = false;
    } else if (userGender === "female") {
        title = "Ms.";
        check = false;
    } else {
        userGender = prompt("Enter your gender (male/female):").toLowerCase();
    }
}
alert(`Welcome ${ title } ${ userName || "Guest"}`);

const order = prompt(
    "What would you like to order? (shawarma, zenger, burger)"
);
if (order) {
    alert(`Your ${ order } is being prepared!`);
    console.log(`${ userName } ordered ${ order }`);
} else {
    alert("You did not place an order.");
}