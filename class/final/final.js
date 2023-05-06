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