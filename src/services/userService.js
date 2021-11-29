export default class UserService {

    add(user){
        console.log("kullanici eklendi" + user);
    }

    list(){
        console.log("kullanicilar listelendi");
    }

    getById(id){
        console.log("kullanici detayi getirildi");
    }
}
