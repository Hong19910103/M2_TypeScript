enum Gender { // cài đặt thuộc tính mặc dịnh cho Gender

    male,
    female

}

interface staffData {  // tạo kiểu dữ liệu sẵn
    fullName: string;
    gender: Gender;
    birthDay: string;
    email: string;
    phoneNumber?: string;

}

class StaffManager { // tạo lớp nhân viên

    private _fullName: string;
    private _gender: Gender;
    private _birthDay: string;
    private _email: string;
    private _phoneNumber: String;

    constructor(fullName: string,
                gender: Gender,
                birthDay: string,
                email: string,
                phoneNumber?: string) {
        this._fullName = fullName;
        this._gender = gender;
        this._birthDay = birthDay;
        this._email = email;
        this._phoneNumber = phoneNumber;

    }
// cài đặt các phương thức  get,set

    getFullName(): string {
        return this._fullName;
    }

    getGender(): Gender {
        return this._gender;
    }

    getBirthDay(): string {
        return this._birthDay;
    }

    getEmail(): string {
        return this._email;
    }

    getPhoneNumber(): String {
        return this._phoneNumber;
    }

    setFullName(fullname: string) {
        this._fullName = fullname;
    }

    setGender(gender: Gender) {
        this._gender = gender;
    }

    setBirthDay(birth: string) {
        this._birthDay = birth;
    }

    setEmail(email: string) {
        this._email = email;
    }

    setPhoneNumber(phone: String) {
        this._phoneNumber = phone;
    }

}
 function showList(staff){
     console.log(staff);
 }

 function deleteInfo(index){
    managerList.slice(index,1);
    return managerList;
 }

 let managerList=[];

let staff1 = new StaffManager("Nguyễn Thị Hồng",Gender.female, "24-09-1991","hong@gmail","09282377")
let staff2 = new StaffManager("Nguyễn Thị Hoa",Gender.male, "18-09-1996","hoa@gmail","09268377")
managerList.push(staff1);
managerList.push(staff2);

showList( managerList);

