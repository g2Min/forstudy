let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token
    // 인증번호를 누를 때마다 번호의 색상이 바뀜
    document.getElementById("target").style.color = "#" + token
}