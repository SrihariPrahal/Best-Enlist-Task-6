function beFindObject(){
    var name = 'Srihari';
    var age = 19;
    var address = 'xxyyzz';

    var name2 = 'Harish';
    var age2 = 29;
    var address2 = 'xyz';
}

const object1 = new beFindObject();
const bject2 = new beFindObject();

beFindObject.prototype.number = 1234;
beFindObject.prototype.color = 'white';

console.log(object1.name);
console.log(object1.number);

console.log(object2.age2);
console.log(object2.color);