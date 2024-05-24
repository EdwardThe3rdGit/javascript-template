export function getMagicNumber(startYear, age) {

    var year = findNextYearEE(startYear)

    console.log(year)

    var currentAge = age + year - startYear
    
    console.log(currentAge)

    var collatz_num = collatz(currentAge, 3)

    console.log(collatz_num)

}

function findNextYearEE(startYear) {
    var key = 0
    var currentYear = startYear

    while(key == 0) {
        if((currentYear-1960) % 4 == 0 && (currentYear-1979) % 5 == 0){
            key = 1
        } else {
            currentYear = currentYear+1
        }
    }

    return currentYear
}

function collatz(a, c) {

    var counter = c
    var age = a

while(counter != 0) {

    if(age % 2 == 0) {
        age = age/2
    } else {
        age = age*3 + 1
    }

    counter = counter - 1

    //console.log(age)
    }

    return age
}

getMagicNumber(2004, 30)
getMagicNumber(2018, 18)
getMagicNumber(2035, 5)
