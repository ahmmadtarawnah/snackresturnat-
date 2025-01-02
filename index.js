let userName = "";
let userGender = "";
let userOrder = "";
let userAnswers = [];

function askGender() {
    let gender = prompt("Enter your gender (male/female):").toLowerCase();
    while (gender !== "male" && gender !== "female") {
        gender = prompt(
            "Invalid input. Please enter your gender (male/female):"
        ).toLowerCase();
    }
    return gender;
}
userName = prompt("Enter your name:") || "Guest";
userGender = askGender();
let title = userGender === "male" ? "Mr." : "Ms.";
userAnswers.push(userName, userGender);
alert(`Welcome ${ title } ${ userName }`);
userOrder =
    prompt("What would you like to order? (shawarma, zenger, burger)") ||
    "nothing";
alert(`Your ${ userOrder } is being prepared!`);
console.log(`${ userName } ordered ${ userOrder }`);
userAnswers.push(userOrder);
console.log("User details:");
for (let i = 0; i < userAnswers.length; i++) {
    console.log(userAnswers[i]);
}