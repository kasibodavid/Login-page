alert("Welcome to Facebook, Please create an account")
let username = prompt("Enter username: ")
let password = prompt("Enter password: ")
alert("your has been successfully created!")
alert("Please login...")

let username2 = prompt("Enter username: ")
let password2 = prompt("Enter password: ")

if (username === username2 && password === password2){
    alert("you have logged in successfully")
}
else{
    alert("invalid info")
}
