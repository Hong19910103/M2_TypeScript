"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
function distance(circle1, circle2, tieptuyen) {
    var distance = Math.pow(circle1.radius - circle2.radius, 2)
        + Math.pow(tieptuyen, 2);
    return Math.pow(distance, 0.5);
    // tạo hàm trả lại giá trị là khoảng cách tâm 2 hình tròn
    // Áp dụng công thức (( bán kính hình tròn 1 - bán kính hình tròn 2 )mũ 2 -
    // (độ dài tuyến tính ) mũ 2 ) lấy căn
}
var circle11 = new Circle_1["default"](14);
var circle12 = new Circle_1["default"](4);
console.log(distance(circle11, circle12, 41));
