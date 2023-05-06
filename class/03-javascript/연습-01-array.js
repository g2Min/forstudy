let classmates = ["철수", "영희", "훈이"]
    
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
'철수'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.length
// 4
classmates.pop()
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']

// concat 함수 예시
let developer = ["워라벨", "연봉", "신분상승", "커리어점프", "개쩌는 개발자의 명성"]
// undefined
developer[2]
// '신분상승'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['워라벨', '연봉', '신분상승', '커리어점프', '개쩌는 개발자의 명성', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['워라벨', '연봉', '신분상승', '커리어점프', '개쩌는 개발자의 명성', '커리어점프', '성공', '할수있다']
