const checkValidation = function(){
    // value로 가져온 값은 모두 string값
    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    
    if(email && pw1 && pw2){
        // 모든 input이 비어있지 않을 떄
        document.getElementById("submit").disabled = false
    }else{
        // 하나라도 비어있는 경우
        document.getElementById("submit").disabled = true
    }
}