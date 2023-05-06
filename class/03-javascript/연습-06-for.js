const childer = ["철수", "영희", "훈이"]
// undefined
for(let i=0; i<3; i++){
    console.log(childer[i] + "입니다")
}
// VM7135:2 철수입니다
// VM7135:2 영희입니다
// VM7135:2 훈이입니다
for(let i=0; i<childer.length; i++){
    console.log(childer[i] + "입니다")
}
// VM7224:2 철수입니다
// VM7224:2 영희입니다
// VM7224:2 훈이입니다

let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 12},
    {name: "도우너", age: 5}
]
// undefined
for(let count=0; count<persons.length; count++){
    if(persons[count].age >= 15){
        console.log("성인입니다")
    }else{
        console.log("미성년자입니다")
    }
}
// VM8020:3 성인입니다
// 2VM8020:5 미성년자입니다
// undefined
for(let count=0; count<persons.length; count++){
    if(persons[count].age >= 15){
        console.log(persons[count].name + "님은 성인입니다")
    }else{
        console.log(persons[count].name + "미성년자입니다")
    }
}
// VM8320:3 철수님은 성인입니다
// VM8320:5 영희미성년자입니다
// VM8320:5 도우너미성년자입니다