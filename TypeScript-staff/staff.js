var Staff = /** @class */ (function () {
    // Xây dựng lớp Staff
    // chú ý khi khai báo lớp theo TS phải khai báo kiểu dữ liệu trước
    //=> nếu không khai báo không nhận giá trị hiện lỗi
    function Staff(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    } // khai báo hàm khởi tạo như bình thường ( có khai báo thêm kiểu dữ liệu cho tham số)
    Staff.prototype.getName = function () {
        return this._name;
    }; // trả kết quả là tên nhân viên
    Staff.prototype.setName = function (name) {
        this._name = name;
    }; // đặt lại tên nhân viên
    Staff.prototype.getEmail = function () {
        return this._email;
    }; //trả về email
    Staff.prototype.setEmail = function (email) {
        this._email = email;
    }; // đặt lại địa chỉ email
    Staff.prototype.getAge = function () {
        return this._age;
    }; // trả về tuổi datatyppe là number
    Staff.prototype.setAge = function (age) {
        this._age = age;
    }; // đặt lại địa chỉ
    return Staff;
}());
var staff = new Staff("Nguyen thi hong", "nguyenthi@gmail.com", 30);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("nguyen thi ngoc");
var changeName = staff.getName();
console.log(changeName);
