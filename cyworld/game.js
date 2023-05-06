// 선언식 function
// 표현식 const
const startWord = () => {
    let myword = document.getElementById("myword").value
    // 사이에 있는 내용을 가져와야함
    let word = document.getElementById("word").innerText

    let lastword = word[word.length - 1]
    let firstword = myword[0]

    if(lastword === firstword){
        document.getElementById("result").innerText = "정답입니다"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    }else{
        document.getElementById("result") = "땡!"
        document.getElementById("myword") = ""
    }
}