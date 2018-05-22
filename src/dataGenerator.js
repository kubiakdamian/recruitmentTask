export const generateForeName = () => {
    var name = ["Adam", "Adrien", "David", "John", "Bob", "Suzie", "Blanca", "Elizabeth", "Angelica", "Hannah"];

    console.log("NAME", generateName(name));

    return generateName(name);
}

export const generateLastName = () => {
    var name = ["Smith", "Jones", "Williams", "Brown", "Taylor", "Davis", "Wilson", "Evans", "Thomas", "Roberts"];
    
    return generateName(name);
}

const generateName = (name) => {
    var randomName = name[Math.floor(Math.random() * name.length)];

    return randomName;
}