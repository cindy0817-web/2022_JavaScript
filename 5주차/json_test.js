//객체 선언
const student = {}
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'

//출력
console.log(JSON.stringify(student, null, 2))