const change1 = function(){
    // 먼저 선언하면 안됨.**
    let phone0 = document.getElementById("phone0").value
    // let phone1 = document.getElementById("phone1").value
    // let phone2 = document.getElementById("phone2").value
    
    if(phone0.length === 3){
        document.getElementById("phone1").focus()
    }
}

const change2 = function(){
    let phone1 = document.getElementById("phone1").value

    if(phone1.length === 4){
        document.getElementById("phone2").focus()
    }
}

const checkValidation = function(){
    let phone2 = document.getElementById("phone2").value
    if(phone2.length === 4){
        document.getElementById("submit").disabled = false
        document.getElementById("submit").style.backgroundColor = "yellow"
    }
}

let isStarted = false;

let auth = function(){
    if(isStarted === false){
        //타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("finish").disabled
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
        
        let time = 180

        timer = setInterval(function(){
            if(time >=0){
                let min = Math.floor(time/60)
                let sec = String(time %60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            }else{
                document.getElementById("finish").disabled = true
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        }, 1000)
    }else{
        //타이머가 작동중일때
    }
}
// const change = () => {
// let phone 1 = docume
// }