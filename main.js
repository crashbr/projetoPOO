const Company = require('./class/Company')
const Employee = require('./class/Employee')
const entrada = require('readline-sync')

const empresa = new Company()

//empresa.criarEmpresa = ("Teste", "Erik", "a@b.com", "123456")
empresa.company = entrada.question("Nome da empresa: ");
empresa.name =  entrada.question("Nome do funcionário: ");
empresa.email = entrada.question("Digite o e-mail: ");
empresa.password = entrada.question("Digite uma senha: "); 
console.log(empresa)

const funcionario = new Employee()

funcionario.company = entrada.question("Digite o nome da empresa: ")
funcionario.name = entrada.question("Digite o seu nome: ")
funcionario.email = entrada.question("Digite o e-mail: ")
funcionario.password = entrada.question("Digite uma senha: ")
console.log(funcionario)