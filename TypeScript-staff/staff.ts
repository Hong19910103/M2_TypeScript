class Staff{
    public _name:string;
    public _email:string;
    public _age: number;
// Xây dựng lớp Staff
    // chú ý khi khai báo lớp theo TS phải khai báo kiểu dữ liệu trước
//=> nếu không khai báo không nhận giá trị hiện lỗi
    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    } // khai báo hàm khởi tạo như bình thường ( có khai báo thêm kiểu dữ liệu cho tham số)


    getName(): string {
        return this._name;
    } // trả kết quả là tên nhân viên

    setName(name: string) {
        this._name = name;
    } // đặt lại tên nhân viên

    getEmail(): string {
        return this._email;
    }//trả về email

    setEmail(email: string) {
        this._email = email;
    } // đặt lại địa chỉ email

    getAge(): number {
        return this._age;
    } // trả về tuổi datatyppe là number

    setAge(age: number) {
        this._age = age;
    }// đặt lại địa chỉ
}
let staff = new Staff("Nguyen thi hong","nguyenthi@gmail.com",30);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("nguyen thi ngoc");
let changeName = staff.getName();
console.log(changeName);

// chạy trong  cần viết câu lệnh  tsc ( tên file ts)
// hiển thị kết quả    node ( ten file js)