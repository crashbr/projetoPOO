const Company = require('./class/Company')
const Employee = require('./class/Employee')
const input = require('readline-sync')
const {readDb, verifyIfCompanyExists, verifyUser, listEmployess} = require('./functions/Functions')

while(true){
    const getDb = readDb()
    const companiesList = getDb.companies

    console.clear()

    console.log(`  

    Bem vindo ao RH Global

    Por favor, entre com seu e-mail e senha para liberação do sistema.

    `)

    const emailAuth = input.question('E-mail: ')
    const passAuth = input.question('Senha: ')

    const checkUser = verifyUser(companiesList, emailAuth, passAuth)
    const checkUserType = checkUser.userType

    //console.log(checkUser)

    switch(checkUserType){

        case 'userDev':
            let optDev = 1

            while(optDev !== 0){
                console.log(`
                Bem vindo desenvolvedor
            
                Escolha uma das opções abaixo, caso não queira alterar direto no banco.
            
                1 - Criar nova empresa
                2 - Alterar senha de admin
                0 - Sair
                `)

                optDev = parseInt(input.question("Digite uma opção: "))

                switch(optDev){
                    case 1:
                        let company = input.question("Nome da empresa: ");
                        if(verifyIfCompanyExists(companiesList, company)){
                            console.log("Company already in database")
                        } else {
                            let name =  input.question("Nome do funcionário: ");
                            let email = input.question("Digite o e-mail: ");
                            let password = input.question("Digite uma senha: "); 
                
                            const novaEmpresa = new Company (company, name, email, password)
                
                            novaEmpresa.register()
                        }
                        break

                    case 2:
                        console.log('Alterar senha de admin')
                        break
                    
                    case 0:
                        console.log('Encerrando sessão')
                        console.clear()
                        break
                }
            }
        break

        case 'userAdmin':


            let optAdmin = 1

            while(optAdmin !== 0){
                console.log(` 

                Bem vindo(a) a ${checkUser.dataReturn.companyDetails.name}

                Ola ${checkUser.dataReturn.userDetails.name}

                Menu Inicial
                
                1 - Listar funcionários
                2 - Inserir funcionário
                3 - Remover funcionário
                0 - Sair
                \n`)

                optAdmin = parseInt(input.question("Digite uma opção: "))

                switch(optAdmin){
                case 1:
                    console.log(listEmployess(companiesList))
                    break
                case 2:
                    let funcCompany = checkUser.dataReturn.companyDetails.name
                    let funcName = input.question("Digite o nome do funcionário: ")
                    let funcEmail = input.question("Digite o e-mail: ")
                    let funcPassword = input.question("Digite uma senha: ")

                        const funcionario = new Employee(funcCompany, funcName, funcEmail, funcPassword)
                        funcionario.register()
                    break

                case 3:
                    console.log('Menu remover funcionario')
                    break

                case 0:
                    console.log('Encerrando sessão')
                    console.clear()
                    break

                default:
                    console.log("\nOpção invalida.")
                    break
                }
            }
        break

        case 'userEmployee':

            let optFunc = 1

            while(optFunc !== 0){
                console.log(`

                    Bem vindo(a) a ${checkUser.dataReturn.companyDetails.name}

                    Ola ${checkUser.dataReturn.userDetails.name}

                    1 - Registrar ponto de entrada
                    2 - Registrar ponto de saída
                    3 - Consultar registros
                    4 - Consultar banco de horas
                    5 - Alterar senha
                    0 - Sair
                `)
                optFunc = parseInt(input.question("Digite uma opção: "))

                switch(optFunc){
                    case 1:
                        console.log('Registrar ponto')
                        break
                    
                    case 2:
                        console.log('Registrar ponto de saída.')
                        break
                    
                    case 3:
                        console.log('Consultar Registros')
                        break
                    case 4:
                        console.log('Consultar banco de horas')
                        break
                    case 5:
                        console.log('Alterar senha')
                        break
                    case 0:
                        console.log('Encerrando sessão')
                        console.clear()
                        break
                    default:
                        console.log('Opcao invalida')
                        break
                }
            }
        break

        default:
            console.log('User not found! Try again')
        break
    }

}