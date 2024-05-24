var key = 0
var age = 13

while(key < 9) {

    console.log(age)

    if(age % 2 == 0) {
        age = age/2
    } else {
        age = age*3 + 1
    }

    if((key % 3 == 0) &&age == 4) {
        key = key+1
    } else if((key % 3 == 1) && age == 2 ) {
        key = key+1
    } else if((key % 3 == 2) && age == 1) {
        key = key+1
    } else {
        key = 0
    }

}