let classmates = [
    { name : "흥민", age: 32, camp: "spus" },
    { name : "미림", age: 30, camp: "종로" },
    { name : "강인", age: 23, camp: "PSG" }
]
// undefined
classmates
// (3) [{…}, {…}, {…}]
// 0: {name: '흥민', age: 32, camp: 'spus'}
// 1: {name:'미림', age: 30, camp: '종로'}
// 2: {name: '강인', age: 23, camp: 'PSG'}
// length: 3[[Prototype]]: Array(0)
classmates.length
// 3
classmates[0].camp
// 'spus'
classmates[2].age
// 23