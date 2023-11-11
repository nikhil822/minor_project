const mongoose = require("mongoose");
// const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  nurseryname: {
    type: String,
    required: true,
  },
  ownername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    min: 10,
    max: 10,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // will encrypt password everytime its saved
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

module.exports = mongoose.model("minorNursery", userSchema);
