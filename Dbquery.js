const connectDb = require("./mySqlConnection")


module.exports.getdatas = async(id) => {
    return await new Promise((resolved,reject) =>{
        connectDb.dbConn.get_connection(qb => {
            qb.release()
            qb.get_where("product",{id:id}, (err,response)=>{
                if(err) throw err
                resolved(response)
            })
        })
    })
}


module.exports.getalldatas = async(id) => {
    return await new Promise((resolved,reject) =>{
        connectDb.dbConn.get_connection(qb => {
            qb.release()
            qb.get("product", (err,response)=>{
                if(err) throw err
                resolved(response)
            })
        })
    })
}


module.exports.updatedata = async(id , name, price) => {
    return await new Promise((resolved,reject) =>{
        connectDb.dbConn.get_connection(qb => {
            qb.release()
            qb.update("product",{name:name,price: price },{id: id}, (err,response)=>{
                if(err) throw err
                resolved(response)
            })
        })
    })
}

module.exports.adddata = async(id , name, price) => {
    return await new Promise((resolved,reject) =>{
        connectDb.dbConn.get_connection(qb => {
            qb.release()
            qb.insert("product",{id : id, name : name, price: price}, (err,response)=>{
                if(err) throw err
                resolved(response)
            })
        })
    })
}

