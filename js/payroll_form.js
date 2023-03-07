class EmployeePayrollData{
    constructor(name,profilePic,gender,department,salary,startDate,note){
        this.name=name;
		this.profilePic=profilePic;
        this.gender=gender;
        this.department=department;
        this.salary=salary;
        this.startDate=startDate;
        this.note=note;
    }
    set name(name){
		let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
		if(nameRegex.test(name))
			this._name=name;
		else {
			console.log("Name is Incorrect");
			throw "Name is Incorrect";
		}
        
    }
    get name(){
        return this._name;
    }
	set profilePic(profilePic){
        this._profilePic=profilePic;
    }
	
	get profilePic(){
        return this._profilePic;
    }

    set gender(gender){
        this._gender=gender;
    }

    get gender(){
        return this._gender;
    }

    set department(department){
        this._department=department;
    }

    get department(){
        return this._department;
    }

    set salary(salary){
        this._salary=salary;
    }

    get salary(){
        return this._salary;
    }

    set startDate(startDate){
        this._startDate=startDate;
    }

    get startDate(){
        return this._startDate;
    }

    set note(note){
        this._note=note;
    }

    get note(){
        return this._note;
    }

    toString(){
        return(
            "{"
            +" Name = "+this.name
			+", profilePic = "+this.profilePic
            +", Gender = "+this.gender
            +", Department = "+this.department
            +", Salary = "+this.salary
            +", Start Date = "+this.startDate
            +", Notes = "+this.note
            +" }"
        )
    }

}

function save(){
    let employeePayrollData = new EmployeePayrollData(
        document.querySelector('#name').value,
		document.querySelector('input[name="profile"]:checked').value,
        document.querySelector('input[name="gender"]:checked').value,
        document.querySelector('input[type="checkbox"]:checked').value,
        document.querySelector('#salary').value,
        document.getElementById("start-date").value,
        document.querySelector('#notes').value
    );
    alert('form submitted \n'+employeePayrollData);
}

window.addEventListener('DOMContentLoaded', (event) => {
	const name = document.querySelector('#name');
	const textError = document.querySelector('.text-error');
	name.addEventListener('input', function(){
		if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try{
            let empData=(new EmployeePayrollData());
            empData.name = name.value;
            textError.textContent="";
        } catch (e) {
            textError.textContent = e;
        }
	});

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });
});


