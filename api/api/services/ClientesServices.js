const Services = require("./Services")
const database = require("../models")
class ClientesServices extends Services {
    constructor(){
        super('Clientes')
    }
    async findAll(where = {}){
        return database[this.nomeDoModelo].findAll({where: {...where}})
    }
    async pegaTodosOsRegistros(where = {}){
        return database[this.nomeDoModelo].scope('todos').findAll({where: {...where}})
    }
    async cancelaPessoaEMatriculas(estudanteId){
        database.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ativo: false}, estudanteId, {transaction: transacao})
            await this.matriculas.atualizaRegistro({statis: false}, { estudante_id: estudanteId }, {transaction: transacao})
        })
    }
    
}

module.exports = ClientesServices;