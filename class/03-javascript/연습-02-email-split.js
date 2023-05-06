const email = "codecamp@gamil.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gamil.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gamil.com'
let userMail = email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
company
// 'gamil.com'
let maskingMail = []
// undefined
userMail
'co/decamp'
maskingMail.push(userMail[0])
1/
maskingMail.push(userMail[1])
2
maskingMail.push(userMail[2])
3
maskingMail
(3) ['c', 'o', 'd']
maskingMail.push(userMail[3])
4
maskingMail.push("*")
5
maskingMail.push("*")
6
mask