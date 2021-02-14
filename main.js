const Company = require('./class/Company')
const Employee = require('./class/Employee')
const entrada = require('readline-sync')
const {readDb, verifyIfCompanyExists} = require('./functions/Functions')

const getDb = readDb()
const companiesList = getDb.companies

let opt = 1

while(opt !== 0){
    console.log(` \nMenu Inicial
    1 - Criar nova Empresa
    2 - Inserir funcionário em uma empresa
    0 - Sair
    \n`)
    opt = parseInt(entrada.question("Digite uma opção: "))

    switch(opt){
    case 1:
        let company = entrada.question("Nome da empresa: ");
        if(verifyIfCompanyExists(companiesList, company)){
            console.log("Company already in database")
        } else {
            let name =  entrada.question("Nome do funcionário: ");
            let email = entrada.question("Digite o e-mail: ");
            let password = entrada.question("Digite uma senha: "); 

            const novaEmpresa = new Company (company, name, email, password)

            novaEmpresa.register()
        }
        break

    case 2:
        let funcCompany = entrada.question("Digite o nome da Empresa: ")
        if(verifyIfCompanyExists(companiesList, funcCompany)){
            let funcName = entrada.question("Digite o seu nome: ")
            let funcEmail = entrada.question("Digite o e-mail: ")
            let funcPassword = entrada.question("Digite uma senha: ")

            const funcionario = new Employee(funcCompany, funcName, funcEmail, funcPassword)
            funcionario.register()
        } else {
            console.log("Company not found")
        }
        break

    case 0:
        console.log("\nEncerrando o programa\n")
        break

    default:
        console.log("\nOpção invalida.")
        break
    }
}