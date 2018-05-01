const mongoose = require("mongoose");
const schema = mongoose.Schema;
const HoSo = new schema({
    id_HoSo:{type:Number,required:true},
    TrinhDo:String,
    Truong:String,
    ChucVuHienTai:String,
    ChuyenNganh:String,
    NamTotNghiep:{type:Number,min:1950, max:2150},
    KiNang:Text,
    ChungChi:String,
    NgoaiNgu:String,
    SoThich:Text,
    TinhCach:Text,
    id_UngTuyen:Number,
    id_UngVien:Number
    
});
// tao module 
const hoso = mongoose.model("HoSo",HoSo);
module.exports=hoso;