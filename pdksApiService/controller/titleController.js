const sqlMain = require('./mainController');
const titleModel = require('../models/titleModel');

exports.getTitleList = async(req,res) => {
    try {
        let reqs = req
        let titleData = await sqlMain.getTitleList(2402)        
        res.send(titleData)
    } catch (err) {
        return err
    }
    
}

// exports.getGroupControl = async(req,res) => {
//     try {
//         let reqs = req
//         let groupControl = await sqlMain.getGroupControl(2402,req.params.kimlik)        
//         res.send(groupControl)
//     } catch (err) {
//         return err
//     }
    
// }
exports.putTitle=async(req,res) =>{
    try {
        console.log(req.body)
        let titleModel = req.body.titleModel
        let licanceNo = req.body.licanceNo

        let titleData = await sqlMain.putTitle(licanceNo,titleModel)        
        res.send(titleData)
    } catch (err) {
        return err
    }
}

exports.deleteTitle=async(req,res) =>{
    try {
        console.log(req.body)
        let kimlik = req.body.kimlik
        let licanceNo = req.body.licanceNo
        let titleData = await sqlMain.deleteTitle(licanceNo,kimlik)        
        res.send(titleData)
    } catch (err) {
        return err
    }
}