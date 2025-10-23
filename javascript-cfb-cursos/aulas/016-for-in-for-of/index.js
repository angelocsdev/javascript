const objs = document.getElementsByTagName("div")

let num = [ 10, 20, 30, 40, 50 ]

for(o of objs) {
    console.log(o.innerHTML="curso")
}

for(o in objs) {
    //console.log(objs[o].innerHTML)
    console.log(o)
}

// for(n of num) {
//     console.log(n)
// }

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }