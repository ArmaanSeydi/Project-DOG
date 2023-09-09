const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    "src": {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("DOGDB", Schema);