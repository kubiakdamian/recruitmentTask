export const generateForeName = () => {
    var name = ["Adam", "Adrien", "David", "John", "Bob", "Suzie", "Blanca", "Elizabeth", "Angelica", "Hannah"];

    return generateName(name);
}

export const generateLastName = () => {
    var name = ["Smith", "Jones", "Williams", "Brown", "Taylor", "Davis", "Wilson", "Evans", "Thomas", "Roberts"];
    
    return generateName(name);
}

export const generateBirthday = (peselsToValidate) => {
    var birthdayTemp = generateMonth() + "/" + generateDay() + "/" + generateYear();
    var peselTemp = generatePesel(birthdayTemp);

    while(checkIfPeselExists(peselsToValidate, peselTemp)){
        peselTemp = generatePesel(birthdayTemp)
    }

    var obj = {
        birthday: birthdayTemp,
        pesel: peselTemp
      };

    return obj;
}

export const generatePesel = (date) => {
    var newDate = new Date(date);
    var year = newDate.getFullYear().toString();
    var month = addZero(newDate.getMonth() + 1);
    var day = addZero(newDate.getDate());

    var pesel = year + month + day + generateNumberForPesel();

    return pesel;
}

const checkIfPeselExists = (peselsToValidate, pesel) => {
    var exists = false;
    for(var i = 0; i < peselsToValidate.length; i++) {
        if (peselsToValidate[i] === pesel){
            exists = true;
        } 
    }

    return exists;
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

