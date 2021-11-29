import UserService from "../services/userService.js";
import User from "../modals/user.js";
import {BaseLogger, ElasticLogger, MongoLogger} from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../modals/customer.js";

console.log("User component yuklendi")


let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1,"Erkan","Yildirim","Istanbul");
let user2 = new User(2,"Baran","Gokcekli","Mugla");
userService.add(user1);
userService.add(user2);

//console.log(userService.list());
//console.log(userService.getById(2));


//userService.getById(1);
//userService.list();


let customer = {id:1,firstName:"Erkan"}

//prototyping  = java scripttte olmayan bir degiskenin eklenmesi olayına prototyping denir.
customer.lastName="Yildirim";

console.log(customer.lastName);

console.log("---------------------------------------")
userService.load();

let customerToAdd = new Customer(1,"Seda","Yilmaz","Ankara","ffsdfsd")
customerToAdd.type="customer";

userService.add(customerToAdd)
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());



