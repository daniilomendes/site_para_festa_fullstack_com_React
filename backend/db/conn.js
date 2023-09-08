const mongoose = require("mongoose")

async function main(){
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://Danilo:ISYZGT1jmQcIpBSV@cluster0.qzt8nm6.mongodb.net/?retryWrites=true&w=majority");

        console.log("Conectado ao BD")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main