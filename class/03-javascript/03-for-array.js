const fruit = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"}
]
// undefined
for(let i=0; i<fruit.length; i++){
    console.log(fruit[i].number + " " + fruit[i].title)
}
    
// VM8761:2 1 레드향
// VM8761:2 2 샤인머스켓
// VM8761:2 3 산청딸기
// VM8761:2 4 한라봉
// VM8761:2 5 사과
// VM8761:2 6 애플망고
// VM8761:2 7 딸기
// VM8761:2 8 천혜향
// VM8761:2 9 과일선물세트
// VM8761:2 10 귤
undefined
for(let i=0; i<fruit.length; i++){
    console.log(`${fruit[i].number} ${fruit[i].title}`)
}
    
// VM8813:2 1 레드향
// VM8813:2 2 샤인머스켓
// VM8813:2 3 산청딸기
// VM8813:2 4 한라봉
// VM8813:2 5 사과
// VM8813:2 6 애플망고
// VM8813:2 7 딸기
// VM8813:2 8 천혜향
// VM8813:2 9 과일선물세트
// VM8813:2 10 귤
// undefined
for(let i=0; i<fruit.length; i++){
    console.log(`과일 차트 ${fruit[i].number} 위는 ${fruit[i].title}입니다`)
}
    
// VM8895:2 과일 차트 1 위는 레드향입니다
// VM8895:2 과일 차트 2 위는 샤인머스켓입니다
// VM8895:2 과일 차트 3 위는 산청딸기입니다
// VM8895:2 과일 차트 4 위는 한라봉입니다
// VM8895:2 과일 차트 5 위는 사과입니다
// VM8895:2 과일 차트 6 위는 애플망고입니다
// VM8895:2 과일 차트 7 위는 딸기입니다
// VM8895:2 과일 차트 8 위는 천혜향입니다
// VM8895:2 과일 차트 9 위는 과일선물세트입니다
// VM8895:2 과일 차트 10 위는 귤입니다
// undefined
