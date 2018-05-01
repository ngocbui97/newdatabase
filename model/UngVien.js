import { Z_BINARY } from "zlib";

const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UngVien = new schema({
    id_UngVien:{type:Number,required:true},
    HoTen:String,
    NgaySinh:Date,
    TenTaiKhoan:{type:String,required:true},
    MatKhau:{type:String,minlength:8},
    DiaChi:String,
    Sodt:{type:Number,enum: [9, 11,]},
    mail:String,
    HinhAnh:Z_BINARY,
    GioiTinh:Boolean,
    id_HoSo:Number,
    id_TTUngTuyen:Number
});
// tao module 
const ungvien = mongoose.model("UngVien",UngVien);
module.exports=ungvien;