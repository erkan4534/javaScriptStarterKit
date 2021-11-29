import UserService from "../services/userService.js";

console.log("User component yuklendi")

let userService = new UserService;

userService.add();
userService.getById(1);
userService.list();
