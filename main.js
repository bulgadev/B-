/*
Vai ser tipada

X mut = 8
Y equal = 16

yell -X + Y-
*/

//Setar variavel de codigo exemplo
const code = `
mut int X = 8

yell -X-
`

//Splitar as linha do codigo
//Ex: linha = codigo.split(/n)
const linha = code.trim().split("\n");

let vars = {}
for (let l of linha) {
    //separe each word on the line
    part = l.split(" ")
    //The first word of our line, important to determine what is it, a print, a variable or something else
    //separe each thing
    if (part[0] == "mut") {
        //says that the first thing is the variable name
        const nome = part[2]
        //do the thing we did above again and again
        const operator = part[3]

        if (part[1] == "int") {
            let value = parseInt(part[4], 10);
            vars[nome] = value;
        } else {
            let value = part[4]
            vars[nome] = value;
        }
        
    }

    if (part[0] == "yell") {
        //with this match thing we will try to find a pattern on something , that in this case is our yell function
        //its a bit complicated, but that gets wuts inside it so we can do something with it, if u want to learn the pattern, idk google it fucker.
        const match = l.match(/-(.*?)-/);

        if (match) {
            //checks if match haves "", if it does, print wut is it, else we mutiply or do the math of it and shit
            if (match[1].includes('""')) {
                console.log(match[1])
            }
            m = match[1].split(" ")
            //we get the vars from left and right and check them on the dic
            const left = vars[m[0]]
            const right = vars[m[2]]
            //takes the operator
            const op = m[1]
            
            //verify the operator and do the operator, later we will ad all operators
            if (op == "+") {
                const result = left + right
                console.log(result)
            } else {
                console.log(vars[m[0]])
            }  
            
        }
    }
}

