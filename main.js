const Company = require('./class/Company')
const Employee = require('./class/Employee')
const entrada = require('readline-sync')


/* let company = entrada.question("Nome da empresa: ");
let name =  entrada.question("Nome do funcionário: ");
let email = entrada.question("Digite o e-mail: ");
let password = entrada.question("Digite uma senha: "); 

const novaEmpresa = new Company (company, name, email, password)

novaEmpresa.createRegistry() */

let funcCompany = entrada.question("Digite o nome da Empresa: ")
let funcName = entrada.question("Digite o seu nome: ")
let funcEmail = entrada.question("Digite o e-mail: ")
let funcPassword = entrada.question("Digite uma senha: ")

const funcionario = new Employee(funcCompany, funcName, funcEmail, funcPassword)
funcionario.register()