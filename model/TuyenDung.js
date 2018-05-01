import { Z_BINARY } from "zlib";

const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TuyenDung = new schema({
    id_TuyenDung:{type:Number,required:true},
    HoTen:String,
    NgaySinh:Date,
    TenTaiKhoan:{type:String,required:true},
    MatKhau:{type:String,minlength:8},
    DiaChi:String,
    Sodt:{type:Number,enum: [9, 11,]},
    mail:String,
    HinhAnh:Z_BINARY,
    GioiTinh:Boolean,
    id_TTTuyenDung:Number,
    id_TTCongTy:Number,
    ChucVuHienTai:String,
    Nganh:String,

});
// tao module 
const tuyendung = mongoose.model("TuyenDung",TuyenDung);
module.exports=tuyendung;