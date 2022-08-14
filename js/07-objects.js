var person = {
    name : "Beyza",
    surname : "Gobel",
    age : 23,
    nameSurname:function(){   // nesne işlevi
        return this.name + " " + this.surname;   // nesne içerisindeki özellikler metod içerisinde kullanılıcaksa this sözcüğü kullanılır
    }
};

console.log(person.nameSurname());   // Beyza Gobel


