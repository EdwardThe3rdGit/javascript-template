export function analyzeGrades(report) {
    const zeugnis = {
        averageGrade: 0,
        bestSubject: {
            subject: "name",
            grade: Infinity
        }
    }

    let counter = 0

    for(const a of report) {
        console.log(a)
        console.log(a.grade)
        zeugnis.averageGrade += a.grade
        counter++
        if(zeugnis.bestSubject.grade > a.grade) {
            zeugnis.bestSubject.grade = a.grade
            zeugnis.bestSubject.subject = a.subject
        }
    }

    zeugnis.averageGrade = zeugnis.averageGrade / counter
    
    return zeugnis


}

const reportS = [
    { subject: "Deutsch", grade: 2.3}, 
    { subject: "Mathe", grade: 1.7}, 
    { subject: "Englisch", grade: 2.0}, 
    { subject: "Chemie", grade: 1.3},
    { subject: "Informatik", grade: 0.7}
]

console.log(analyzeGrades(reportS))
