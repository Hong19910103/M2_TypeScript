var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var StaffManager = /** @class */ (function () {
    function StaffManager(fullName, gender, birthDay, email, phoneNumber) {
        this._fullName = fullName;
        this._gender = gender;
        this._birthDay = birthDay;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }
    StaffManager.prototype.getFullName = function () {
        return this._fullName;
    };
    StaffManager.prototype.getGender = function () {
        return this._gender;
    };
    StaffManager.prototype.getBirthDay = function () {
        return this._birthDay;
    };
    StaffManager.prototype.getEmail = function () {
        return this._email;
    };
    StaffManager.prototype.getPhoneNumber = function () {
        return this._phoneNumber;
    };
    StaffManager.prototype.setFullName = function (fullname) {
        this._fullName = fullname;
    };
    StaffManager.prototype.setGender = function (gender) {
        this._gender = gender;
    };
    StaffManager.prototype.setBirthDay = function (birth) {
        this._birthDay = birth;
    };
    StaffManager.prototype.setEmail = function (email) {
        this._email = email;
    };
    StaffManager.prototype.setPhoneNumber = function (phone) {
        this._phoneNumber = phone;
    };
    return StaffManager;
}());
function showList(staff) {
    console.log(staff);
}
var managerList = [];
var staff1 = new StaffManager("Nguyễn Thị Hồng", Gender.female, "24-09-1991", "hong@gmail", "09282377");
var staff2 = new StaffManager("Nguyễn Thị Hoa", Gender.male, "18-09-1996", "hoa@gmail", "09268377");
managerList.push(staff1);
managerList.push(staff2);
showList(managerList);
