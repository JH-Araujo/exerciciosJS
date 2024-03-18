const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Titulo", "Lorem ipsum frua Lips Lorem...")

post.addComment("Joao Henrique", "Muito bom")
post.addComment("Andreia Thais", "Adorei!!")

console.log(john)
console.log(post)