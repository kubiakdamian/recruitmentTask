export const generateForeName = () => {
    var name = ["Adam", "Adrien", "David", "John", "Bob", "Suzie", "Blanca", "Elizabeth", "Angelica", "Hannah"];
    var randomName = name[Math.floor(Math.random() * name.length)];

    console.log("NAME", randomName);

    return randomName;
}

export const generateLastName = () => {
    var name = ["Smith", "Jones", "Williams", "Brown", "Taylor", "Davis", "Wilson", "Evans", "Thomas", "Roberts"];
    var randomName = name[Math.floor(Math.random() * name.length)];

    console.log("NAME", randomName);

    return randomName;
}