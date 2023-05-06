setTimeout(function(){
    console.log("펑!")
},3000)
// 236
// VM11006:2 펑!
setInterval(function(){
    console.log("1초가 지났다")
},1000)
// 237
// 20VM11175:2 1초가 지났다

// 10초 타이머
let time = 10
undefined
setInterval(function(){
    if(time >= 0){
    console.log(time)
    time = time-1
    }
},1000)
// 240
// VM12415:3 10
// VM12415:3 9
// VM12415:3 8
// VM12415:3 7
// VM12415:3 6
// VM12415:3 5
// VM12415:3 4
// VM12415:3 3
// VM12415:3 2
// VM12415:3 1


// 시간이 줄어드는 타이머를 가진 회원가입
let ti_me = 180
// undefined
setInterval(function(){
    if( ti_me >= 0 ){
        let min = Math.floor( time/60 )
        let sec = String( time%60 ).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time - 1
    }
},1000)