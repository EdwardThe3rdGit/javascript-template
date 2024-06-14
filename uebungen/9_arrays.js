export function filterStrings(arr) {
    const r_arr = []
    for (const a of arr) {
        if(a.startsWith("S") || a.length > 4) {
            r_arr.unshift(a)
        }
    }
    return r_arr
}

const array = ["Kugelschreiber", "Salz", "Maus"]
console.log(filterStrings(array))