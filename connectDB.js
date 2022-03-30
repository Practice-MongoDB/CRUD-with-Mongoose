const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Nodemy");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "Account",
  }
);

const accountModel = mongoose.model("Account", accountSchema);
//Find Data
accountModel
  .find({})
  .then((data) => console.log("Log :  data", data))

  .catch((err) => console.log("Log :  err", err));

// Create Data
accountModel
  .create({ username: "vuongck", password: 456 })
  .then((data) => console.log("Thêm thành công: ", data))
  .catch((err) => console.log("Thêm thất bại: ", err));

//Update Data
accountModel
  .updateOne(
    {
      username: "tintt",
      password: "123abc",
    },
    {
      password: "123",
    }
  )
  .then((data) => console.log("Sửa thành công: ", data))
  .catch((err) => console.log("Sửa thất bại: ", err));

//Delete Data
accountModel
  .deleteOne({
    username: "duyna",
  })
  .then((data) => console.log("Xóa thành công: ", data))
  .catch((err) => console.log("Xóa thất bại: ", err));
