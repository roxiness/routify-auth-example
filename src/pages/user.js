import { writable } from "svelte/store";

const user = writable(false)

user.authenticate = function (){
    const name = localStorage.getItem("user");
    user.set(name);
}

user.login = function (name) {
    localStorage.setItem("user", name);
    user.set(name);
}

user.logout = function () {
    localStorage.removeItem('user')
    user.set(false);
}

export default user