const Company = require('./class/Company')
const Employee = require('./class/Employee')
const Administrator = require('./class/Administrator')
const input = require('readline-sync')
const { readDb, verifyIfCompanyExists, verifyUser, listEmployess, attendanceInfo } = require('./functions/Functions')

while (true) {
    let getDb = readDb()
    let companiesList = getDb.companies

    console.clear()

    console.log(`  
    Bem vindo ao RH Global
    Por favor, entre com seu e-mail e senha para liberação do sistema.
    `)

    let emailAuth = input.question('E-mail: ')
    let passAuth = input.question('Senha: ')

    const checkUser = verifyUser(companiesList, emailAuth, passAuth)
    const checkUserType = checkUser.userType

    switch (checkUserType) {

        case 'userDev':
            let optDev = 1

            while (optDev !== 0) {
                console.log(`
                Bem vindo desenvolvedor
            
                Escolha uma das opções abaixo, caso não queira alterar direto no banco.
            
                1 - Criar nova empresa
                0 - Sair
                `)

                optDev = parseInt(input.question("Digite uma opção: "))

                switch (optDev) {
                    case 1:
                        getDb = readDb()
                        let company = input.question("Nome da empresa: ");
                        if (verifyIfCompanyExists(companiesList, company)) {
                            console.log("Company already in database")
                        } else {
                            let name = input.question("Nome do funcionário: ");
                            let email = input.question("Digite o e-mail: ");
                            let password = input.question("Digite uma senha: ");

                            const novaEmpresa = new Company(company, name, email, password)

                            novaEmpresa.register()
                        }
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

            while (optAdmin !== 0) {

                const companyName = checkUser.dataReturn.companyDetails.name

                console.log(` 
                Bem vindo(a) a ${companyName}
                Ola ${checkUser.dataReturn.userDetails.name}
                Menu Inicial
                
                1 - Listar funcionários
                2 - Inserir funcionário
                3 - Remover funcionário
                0 - Sair
                \n`)

                optAdmin = parseInt(input.question("Digite uma opção: "))
                getDb = readDb()
                const filterEmployees = listEmployess(companiesList, companyName)

                switch (optAdmin) {
                    case 1:
                        for (let i = 0; i < filterEmployees.length; i++) {
                            let consultAttendance = filterEmployees[i].attendanceInfo
                            let limitConsultAttendance // limita consulta a 10 registros.
                            if (consultAttendance.length > 10) {
                                limitConsultAttendance = 10
                            } else {
                                limitConsultAttendance = consultAttendance.length
                            }
                            let formatedAttendance = []
                            for (let j = 0; j < limitConsultAttendance; j++) {
                                formatedAttendance.push(consultAttendance[j] + '\n')
                            }
                            //criar uma funcao, passando o usuario para listar no campo Horas.
                            console.log(`
                            Nome: ${filterEmployees[i].name}
                            Email: ${filterEmployees[i].email}
                            Horas: ${formatedAttendance}
                        `)
                        }
                        break

                    case 2:
                        let funcCompany = checkUser.dataReturn.companyDetails.name
                        let funcName = input.question("Digite o nome do funcionário: ")
                        let funcEmail = input.question("Digite o e-mail: ")
                        let funcPassword = input.question("Digite uma senha: ")

                        let funcionario = new Administrator(funcCompany, funcName, funcEmail, funcPassword)
                        funcionario.registerEmployee()
                        break

                    case 3:

                        for (let i = 0; i < filterEmployees.length; i++) {
                            console.log(`
                            Nome: ${filterEmployees[i].name}
                            Email: ${filterEmployees[i].email}
                            `)
                        }
                        let deleteEmployee = input.question('Digite o e-mail do funcionário: ')
                        let funcDeleteEmail = deleteEmployee
                        let funcDeleteionario = new Administrator(companyName, '', funcDeleteEmail, '')
                        funcDeleteionario.removeEmployee()
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

            while (optFunc !== 0) {
                console.log(`
                    Bem vindo(a) a ${checkUser.dataReturn.companyDetails.name}
                    Ola ${checkUser.dataReturn.userDetails.name}
                    1 - Registrar ponto
                    2 - Consultar registros
                    3 - Consultar banco de horas
                    0 - Sair
                `)
                optFunc = parseInt(input.question("Digite uma opção: "))
                getDb = readDb()
                let company = checkUser.dataReturn.companyDetails.name
                let name = checkUser.dataReturn.userDetails.name
                let email = checkUser.dataReturn.userDetails.email
                let password = checkUser.dataReturn.userDetails.password
                const filterAttendance = attendanceInfo(companiesList, email, password)
                const returnAttendanceArray = filterAttendance.userDetails.attendanceInfo
                const lastRegistry = returnAttendanceArray[returnAttendanceArray.length - 1]

                const ponto = new Employee(company, name, email)

                switch (optFunc) {
                    case 1:
                        if (lastRegistry === undefined || lastRegistry.split(':')[0] === 'Saida') {
                            ponto.checkIn()
                        } else {
                            ponto.checkOut()
                        }

                        break

                    case 2:
                        let filterFinal = filterAttendance.userDetails.attendanceInfo
                        for (let i = 0; i < filterFinal.length; i++) {
                            console.log(filterFinal[i])
                        }
                        break
                    case 3:
                        console.log('Consultar banco de horas')
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
            console.log('User or password incorrect, try again.')
            input.question("\nPress enter to continue")
            break
    }

}