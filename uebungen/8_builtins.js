export function removeSalutation(name) {
    if(name.startsWith("Fr. ") || name.startsWith("Hr. ")) {
        return name.substring(4, name.length + 1)
    }
    return name;
}

console.log(removeSalutation("Hr. Hulk"))
console.log(removeSalutation("Thor"))
console.log(removeSalutation("Fr. Black Widow"))


export function removeString(subject, needle) {
    return subject.replace(needle, "")
}

console.log(removeString("FooBarFoo", "Bar"))