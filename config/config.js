require("dotenv").config();

const dev = {
    app : {
        port : process.env.PORT || 3000
    },
    db : {
        url : process.env.DB_URL || "mongobd://localhost:27017/ProductsDb"
    }
}

module.exports = dev;