// 1 & 2: สร้าง Array ของ Tuple เก็บข้อมูล [name, score]
let students: [string, number][] = [["John", 85],["Jane", 72],["Mark", 45]];

// 3: วนลูปและเช็คเกรด
for (let [name, score] of students) {
    let grade = score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : score >= 50 ? "D" : "F";
    
    // 4: แสดงผลตามรูปแบบที่กำหนด
    console.log(`${name} received ${score} and grade ${grade}`);
}
