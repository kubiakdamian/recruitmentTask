export const generateForeName = () => {
    var name = ["Adam", "Adrien", "David", "John", "Bob", "Suzie", "Blanca", "Elizabeth", "Angelica", "Hannah"];

    return generateName(name);
}

export const generateLastName = () => {
    var name = ["Smith", "Jones", "Williams", "Brown", "Taylor", "Davis", "Wilson", "Evans", "Thomas", "Roberts"];
    
    return generateName(name);
}

export const generateBirthday = () => {
    var birthday = generateMonth() + "/" + generateDay() + "/" + generateYear();
    return birthday;
}

export const generatePesel = (date) => {
    var date = new Date(date);
    var year = date.getFullYear().toString();
    var month = addZero(date.getMonth() + 1);
    var day = addZero(date.getDate());

    var pesel = day + month + year + generateNumberForPesel();

    return pesel;
}

const generateNumberForPesel = () => {
    var number = Math.floor(Math.random() * (89999)) + 10000;

    return number.toString();
}

const generateDay = () => {
    var day = Math.floor(Math.random() * (30)) + 1;

    return addZero(day);
}

const generateMonth = () => {
    var month = Math.floor(Math.random() * (12)) + 1;
    
    return addZero(month);
}

const generateYear = () => {
    return (Math.floor(Math.random() * (70)) + 1930).toString();
}

const addZero = (number) => {
    var temp;

    if(number < 10){
        temp = "0" + number.toString();
    }else{
        temp = number.toString();
    }

    return temp;
}

const generateName = (name) => {
    var randomName = name[Math.floor(Math.random() * name.length)];

    return randomName;
}

