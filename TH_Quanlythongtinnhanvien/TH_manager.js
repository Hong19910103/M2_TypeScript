var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
// let a = new Date()
// khai báo class nhân viên  có các thuộc tính
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, bday, email, phoneNumber) {
        this.fullname = fullname;
        this.gender = gender;
        this.bday = bday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Nguyễn Thị Hồng", Gender.FEMALE, "24/09/1991", "hong@gmail.com", "0933666666"));
employeeList.push(new Employee("Nguyễn Thị Hà", Gender.MALE, "10/10/2000", "ha@gamil.com", "93662638263"));
employeeList.push(new Employee("Hoang văn hoang", Gender.OTHER, "2/3/338", "hoang@gmail.com", "535239138"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
