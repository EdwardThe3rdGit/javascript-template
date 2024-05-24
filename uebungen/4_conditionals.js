var birthYear = 2005
var birthMonth = 7
var birthDay = 4
var currentYear = 2024
var currentMonth = 5
var currentDay = 24

if(birthMonth <= currentMonth && birthDay <= currentDay) {
    console.log(currentYear-birthYear)
} else {
    console.log(currentYear-birthYear-1)
}

if(birthMonth <= 3){
    console.log("Q1")
} else if(birthMonth <= 6 && birthMonth > 3){
    console.log("Q2")
} else if(birthMonth <= 9 && birthMonth > 6){
    console.log("Q3")
} else if(birthMonth <= 12 && birthMonth > 9){
    console.log("Q2")
}

if((currentYear-1960) % 4 == 0 && (currentYear-1979) % 5 == 0) {
    console.log("Dieses Jahr ist EM und Euopawahl")
}

if((currentDay == birthDay && currentMonth == birthMonth) || (currentDay == 24 && currentMonth == 12)) {
    console.log("Du bekommst Geschenke! Glückwunsch!")
}