const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username"

function handleLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings (userName) {
    greeting.innerText=`Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit)

} else {
    paintGreetings(savedUserName);
}


//
// if (userName===null||userName==="") {
//     alert("please write your name.");
// } else if (userName.length > 15) {
//     alert("please write your name under length 15")
// } else {
//     alert("hello, "+userName);
// }
