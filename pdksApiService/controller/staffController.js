const sqlMain = require('../controller/mainController');
const staffModel = require('../models/staffModel');

exports.getStaffList = async(req,res) => {
    try {
        let reqs = req
        let staffData = await sqlMain.getStaffList(2402)        
        res.send(staffData)
    } catch (err) {
        return err
    }
}






// exports.saveStaff = async(req,res) => {
//     try {
//         let myModel = new staffModel.StaffModel()
//         myModel.ARAC = "TEST"
//         let result = await sqlMain.saveStaff(2892,myModel)
//         res.send("OK")
//     } catch (err) {
        
//     }
// }



