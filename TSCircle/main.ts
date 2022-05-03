import Circle from "./Circle";

function distance(circle1: Circle,
                  circle2: Circle,
                  tieptuyen: number): number {

    let distance = Math.pow(circle1.radius - circle2.radius, 2)
                  + Math.pow(tieptuyen, 2);
    return Math.pow(distance,0.5);
// tạo hàm trả lại giá trị là khoảng cách tâm 2 hình tròn
    // Áp dụng công thức (( bán kính hình tròn 1 - bán kính hình tròn 2 )mũ 2 -
                          // (độ dài tuyến tính ) mũ 2 ) lấy căn

}
let circle11 = new Circle(14);
let circle12 = new Circle(4);
console.log(distance(circle11,circle12,41));
