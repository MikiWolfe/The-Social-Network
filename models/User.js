const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});

const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

module.exports = User;
