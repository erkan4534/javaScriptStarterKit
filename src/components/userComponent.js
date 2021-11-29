import UserService from "../services/userService.js";
import User from "../modals/user.js";

console.log("User component yuklendi")

let userService = new UserService();

let user1 = new User(1,"Erkan","Yildirim","Istanbul");

userService.add(user1.firstName);



userService.getById(1);
userService.list();


let customer = {id:1,firstName:"Erkan"}

//prototyping  = java scripttte olmayan bir degiskenin eklenmesi olayına prototyping denir.
customer.lastName="Yildirim";

console.log(customer.lastName);
