const db = require("./Dbquery")


const getdata = async function(req,res){
    try{
        const data = await db.getdatas(2)
        console.log(data[0])
        return res.status(200).send({data:data})

    }catch(err){
        return res.status(500).send({status: false,message: err.message})
    }
}

const getalldata = async function(req,res){
    try{
        const data = await db.getalldatas()
        console.log(data[0])
        return res.status(200).send({data:data})

    }catch(err){
        return res.status(500).send({status: false,message: err.message})
    }
}


const updatedata = async function(req,res){
    try{
        const{id,name, price} = req.body
        const data = await db.updatedata(id,name, price)
        console.log(data[0])
        return res.status(200).send({data:data})

    }catch(err){
        return res.status(500).send({status: false,message: err.message})
    }
}


const insertdata = async function(req,res){
    try{
        const{id,name, price} = req.body
        const data = await db.adddata(id,name, price)
        console.log(data[0])
        return res.status(200).send({data:data})

    }catch(err){
        return res.status(500).send({status: false,message: err.message})
    }
}
module.exports.getdata = getdata
module.exports.updatedata = updatedata
module.exports.insertdata = insertdata
module.exports.getalldata = getalldata
