//Happy holi



import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";


const showUser = async () => {
    const person = await getUser();
    displayUser(person);
  };


window.addEventListener("DOMContentLoaded", showUser);
document.getElementById("btn").addEventListener("click", showUser);
