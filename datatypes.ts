enum Role { ADMIN, READ_Only, Author }

const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: "leo",
    age: 18,
    hobbies: ["Sports", "Cooking"]
}

console.log(person.name)
for (let i = 0; i < person.hobbies.length; i++) {
    console.log(person.hobbies[i])
}