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
    async cancelaClienteEPet(clienteId){
        database.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ativo: false}, clienteId, {transaction: transacao})
            await this.matriculas.atualizaRegistro({statis: false}, { estudante_id: clienteId }, {transaction: transacao})
        })
    }
    
}

module.exports = ClientesServices;