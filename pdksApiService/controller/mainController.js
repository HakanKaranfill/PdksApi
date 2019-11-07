const socketClient = require('../tools/socketClient');
const socketEvent = require('../tools/socketEvent');
// const staffModel = require('../models/staffModel');
// const shiftModel = require('../models/shiftModel');
const returnModel = require('../models/responseModel');
const control = require('../tools/function');


//----------------------------------------------------------------------
let response = new returnModel.responseModel()
exports.getStaffList = async(licanceId,companyCode,status) => {
    try {
        let getDataString = "SELECT Kimlik, (SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER.SUBE_KODU) AS SUBE_KODU, PERSONEL_KODU, PERSONEL_ADI, AKTIF, ISE_GIRIS, ISTEN_AYRILIS, UNVAN_ID, GRUP_ID FROM TBL_PER where AKTIF = "+ status 
      
             
        if(companyCode != "0") {
            getDataString += " AND SUBE_KODU = "+companyCode
        }

        licanceId = await control._licanceControl(licanceId)
        let staffData = await socketClient.getData(getDataString,licanceId,"TBL_PER")
    return staffData
    } catch (error) {
        return error
    }

}
exports.updateStaff = async(licanceId,model) => {   
    try {
                licanceId = await control._licanceControl(licanceId)
        // Cmd =  "UPDATE TBL_PER SET AKTIF = CASE WHEN '"+ model.AKTIF +"' = 'false' THEN 0 ELSE 1 END, ISE_GIRIS = CASE WHEN '"+ model.ISE_GIRIS +"' = 'null' then NULL ELSE '"+ model.ISE_GIRIS +"' END , ISTEN_AYRILIS = CASE WHEN'"+ model.ISTEN_AYRILIS +"' = 'null' then NULL ELSE '"+ model.ISTEN_AYRILIS +"' END , UNVAN_ID = CASE WHEN '"+ model.UNVAN_ADI +"' = 'undefined' then 0 ELSE '"+ model.UNVAN_ADI +"' END , GRUP_ID = CASE WHEN '"+ model.GRUP_ID +"' = 'null' THEN 0 ELSE '"+ model.GRUP_ID +"' END WHERE kimlik = "+ model.Kimlik 
        Cmd =  "UPDATE TBL_PER SET ISE_GIRIS = CASE WHEN '"+ model.ISE_GIRIS +"' = 'null' then NULL ELSE '"+ model.ISE_GIRIS +"' END , ISTEN_AYRILIS = CASE WHEN'"+ model.ISTEN_AYRILIS +"' = 'null' then NULL ELSE '"+ model.ISTEN_AYRILIS +"' END , UNVAN_ID = CASE WHEN '"+ model.UNVAN_ID +"' = 'undefined' then 0 ELSE '"+ model.UNVAN_ID +"' END , GRUP_ID = CASE WHEN '"+ model.GRUP_ID +"' = 'null' THEN 0 ELSE '"+ model.GRUP_ID +"' END WHERE kimlik = "+ model.Kimlik 
        let updateResult = await socketEvent.Event(Cmd,licanceId,"TBL_PER_UPDATE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}



//----------------------------------------------------------------------
exports.getShiftAndPermissionList = async(licanceId,companyCode) => {
    try {
        // let shiftAndPermissionData = await socketClient.getData("SELECT kimlik, ADI  FROM TBL_PER_VARDIYA_IZIN",licanceId,"VARDIYA_IZIN_TATIL")
        // return shiftAndPermissionData
        let getDataString = "SELECT kimlik, ADI  FROM TBL_PER_VARDIYA_IZIN"
        getDataString += await control._companyCodeControl(companyCode)
        licanceId = await control._licanceControl(licanceId)
        let shiftAndPermissionData = await socketClient.getData(getDataString,licanceId,"TBL_PER_UNVAN")
    return shiftAndPermissionData
    } catch (error) {
        return error
    }

}

//----------------------------------------------------------------------

exports.getPermissionList = async(licanceId,companyCode) => {
    try {
        // let permissionData = await socketClient.getData("SELECT kimlik, ADI ,UCRET,(SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER_UNVAN.SUBE_KODU) AS SUBE_KODU FROM TBL_PER_VARDIYA_IZIN WHERE A_ZAMAN IS NULL",licanceId,"IZIN")
        // return permissionData

        let getDataString = "SELECT kimlik, ADI ,UCRET,(SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER_VARDIYA_IZIN.SUBE_KODU) AS SUBE_KODU FROM TBL_PER_VARDIYA_IZIN WHERE A_ZAMAN IS NULL"
        if(companyCode != "0") {
            getDataString += " AND SUBE_KODU = "+companyCode
        }
        licanceId = await control._licanceControl(licanceId)
        let permissionData = await socketClient.getData(getDataString,licanceId,"TBL_PER_VARDIYA_IZIN")
    return permissionData
    } catch (error) {
        return error
    }

}
exports.deletePermission = async(licanceId,model) => {
    try {
        licanceId = await control._licanceControl(licanceId)
        let permissionData = await socketEvent.Event("DELETE FROM TBL_PER_VARDIYA_IZIN WHERE kimlik='"+model.kimlik+"'",licanceId,"IZINDelete")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

exports.savePermissions = async(licanceId,model,companyCode) => {   
    try {
        licanceId = await control._licanceControl(licanceId)
        if (model.kimlik==undefined) {
            
            Cmd =  "INSERT INTO TBL_PER_VARDIYA_IZIN (ADI,UCRET,SUBE_KODU) VALUES" + "('" + model.permissionName +"'" + ",'" + model.type +"','" + companyCode +"')" 
        }
        else{
            Cmd =  "UPDATE TBL_PER_VARDIYA_IZIN SET ADI = '"+ model.ADI +"' , UCRET = '"+ model.UCRET +"'  WHERE kimlik = "+ model.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"permission")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}

exports.getPermissionControl = async(licanceId,kimlik) => {
    try {
        licanceId = await control._licanceControl(licanceId)
        let permissionControl = await socketClient.getData("SELECT COUNT(*) AS permissionControl FROM (SELECT * FROM TBL_PER_CALISMA_PLANI UNION ALL SELECT * FROM TBL_PER_GRUP_CALISMA_PLANI ) AS T1 WHERE VARDIYA_IZIN_ID = '"+ kimlik +"'",licanceId,"VARDIYA_IZIN_KONTROL")
        return permissionControl
    } catch (error) {
        return error
    }
    
}

//---------------------------------------------------------------------- SHIFT

exports.getShiftList = async(licanceId,companyCode) => {
    try {
        // let shiftData = await socketClient.getData("SELECT kimlik, ADI, A_ZAMAN, K_ZAMAN,,(SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER_VARDIYA_IZIN.SUBE_KODU) AS SUBE_KODU FROM TBL_PER_VARDIYA_IZIN WHERE A_ZAMAN IS NOT NULL",licanceId,"VARDIYA")
        // return shiftData
      
        let getDataString = "SELECT kimlik, ADI, A_ZAMAN, K_ZAMAN, (SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER_VARDIYA_IZIN.SUBE_KODU) AS SUBE_KODU FROM TBL_PER_VARDIYA_IZIN WHERE A_ZAMAN IS NOT NULL"
        if(companyCode != "0") {
            getDataString += " AND SUBE_KODU = "+companyCode
        }
        licanceId = await control._licanceControl(licanceId)
        let shiftData = await socketClient.getData(getDataString,licanceId,"TBL_PER_VARDIYA_IZIN")
        return shiftData
    } catch (error) {
        return error
    }

}

exports.deleteShift = async(licanceId,model) => {
    try {
        licanceId = await control._licanceControl(licanceId)
        let ShifData = await socketEvent.Event("DELETE FROM TBL_PER_VARDIYA_IZIN WHERE kimlik='"+model.kimlik+"'",licanceId,"VARDIYA_DELETE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

exports.putShift = async(licanceId,model,companyCode) => {   
    try {
        licanceId = await control._licanceControl(licanceId)
        if (model.kimlik==undefined) {
            
            Cmd =  "INSERT INTO TBL_PER_VARDIYA_IZIN (ADI,A_ZAMAN,K_ZAMAN,SUBE_KODU) VALUES" + "('" + model.shiftName +"'" + ", DATEADD(s,-1 * DATEPART(SS,'" + model.startTime +"'),'" + model.startTime +"')" + ", DATEADD(s,-1 * DATEPART(SS,'" + model.stopTime+"'),'" + model.stopTime+"'),'" + companyCode +"' )" 
        }

        else{
            Cmd =  "UPDATE TBL_PER_VARDIYA_IZIN SET ADI = '"+ model.ADI +"' , A_ZAMAN = '"+ model.A_ZAMAN +"' , K_ZAMAN = '"+ model.K_ZAMAN +"'  WHERE kimlik = "+ model.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"permission")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}

//---------------------------------------------------------------------- SHIFT

exports.getGroupList = async(licanceId,companyCode) => {
    try {
        // let groupData = await socketClient.getData("SELECT kimlik,GRUP_ADI,(SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER_GRUP.SUBE_KODU) AS SUBE_KODU FROM TBL_PER_GRUP",licanceId,"GRUP_LISTE")
        // return groupData

        let getDataString = "SELECT kimlik,GRUP_ADI,(SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER_GRUP.SUBE_KODU) AS SUBE_KODU FROM TBL_PER_GRUP"
        getDataString += await control._companyCodeControl(companyCode)
        licanceId = await control._licanceControl(licanceId)
        let groupData = await socketClient.getData(getDataString,licanceId,"TBL_PER_GRUP")
        return groupData
    } catch (error) {
        return error
    }

}

exports.getGroupControl = async(licanceId,kimlik) => {
    try {
        licanceId = await control._licanceControl(licanceId)
        let groupControl = await socketClient.getData("SELECT COUNT(*) as groupControl FROM TBL_PER where GRUP_ID = '"+ kimlik +"'",licanceId,"GROUP_KONTROL")
        return groupControl
    } catch (error) {
        return error
    }
    
}


exports.deleteGroup = async(licanceId,model) => {
    licanceId = await control._licanceControl(licanceId)
    try {
        let deletePlan = await socketEvent.Event("DELETE FROM TBL_PER_GRUP_CALISMA_PLANI WHERE GRUP_ID = '"+model.kimlik+"'",licanceId,"GRUP_CALISMA_PLANI_DELETE")
        let groupData = await socketEvent.Event("DELETE FROM TBL_PER_GRUP WHERE kimlik ='"+model.kimlik+"'",licanceId,"GRUP_LISTE_DELETE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

exports.putGroup = async(licanceId,model,companyCode) => {   
    licanceId = await control._licanceControl(licanceId)
    try {
        if (model.kimlik==undefined || model.kimlik== "" || model.kimlik== "0"){
            
            Cmd =  "INSERT INTO TBL_PER_GRUP (GRUP_ADI,SUBE_KODU) VALUES ('" + model.groupName +"','" + companyCode +"')"
        }
        else{
            Cmd =  "UPDATE TBL_PER_GRUP SET GRUP_ADI = '"+ model.GRUP_ADI +"'  WHERE kimlik = "+ model.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"group")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}

//----------------------------------------------------------------------

exports.getWorkPlanForGroupList = async(licanceId,kimlik) => {
    try {
        let WorkPlanForGroupData = await socketClient.getData("SELECT kimlik, convert(date,TARIH) as TARIH, FORMAT(TARIH, 'dddd', 'tr-TR')  as GUN_ADI, VARDIYA_IZIN_ID FROM TBL_PER_GRUP_CALISMA_PLANI WHERE GRUP_ID = '"+kimlik+"' ORDER BY convert(date,TARIH)",licanceId,"GRUP_CALISMA_PLANI")
        return WorkPlanForGroupData
    } catch (error) {
        return error
    }

}

exports.putWorkPlanForGroup = async(licanceId,model) => {   
    try {
        if (model.workPlanForGroupModelsFrm.kimlik==undefined) {//buraya bak tuna !!
            
            Cmd =  "EXEC [SP_PER_CALISMA_PLANI] '"+ model.workPlanForGroupModelsFrm.startDate +"','"+ model.workPlanForGroupModelsFrm.endDate +"','"+ model.selectData +"','"+ model.workPlanForGroupModelsFrm.sunday +"','"+ model.workPlanForGroupModelsFrm.monday +"','"+ model.workPlanForGroupModelsFrm.tuesday +"','"+ model.workPlanForGroupModelsFrm.wednesday +"','"+ model.workPlanForGroupModelsFrm.thursday +"','"+ model.workPlanForGroupModelsFrm.friday +"','"+ model.workPlanForGroupModelsFrm.saturday +"','GRUP'"
        }
        else{
            Cmd =  "UPDATE TBL_PER_GRUP_CALISMA_PLANI SET VARDIYA_IZIN_ID = '"+ model.workPlanForGroupModelsFrm.VARDIYA_IZIN_ID +"' WHERE kimlik = "+ model.workPlanForGroupModelsFrm.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"GRUP_CALISMA_PLANI_EKLE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}


exports.deleteworkPlanForGroup = async(licanceId,model) => {

    try {
        let deletePlan = await socketEvent.Event("DELETE FROM TBL_PER_GRUP_CALISMA_PLANI WHERE GRUP_ID = '"+model.kimlik+"'",licanceId,"GRUP_CALISMA_PLANI_DELETE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

///------------------------------------------------------

// exports.getWorkPlanForUserList = async(licanceId) => {
//     try {
//         let WorkPlanForUserData = await socketClient.getData("SELECT kimlik, TARIH, GUN_ADI, (SELECT ADI FROM TBL_PER_VARDIYA_IZIN where kimlik=VARDIYA_IZIN_ID) AS ADI FROM TBL_PER_CALISMA_PLANI WHERE ISLEM_ID = 1",licanceId,"GRUP_CALISMA_PLANI")
//         return WorkPlanForUserData
//     } catch (error) {
//         return error
//     }

// }



exports.getWorkPlanForUserList = async(licanceId,kimlik) => {
    try {
        let WorkPlanForGroupData = await socketClient.getData("SELECT kimlik, convert(date,TARIH) as TARIH, FORMAT(TARIH, 'dddd', 'tr-TR')  as GUN_ADI, VARDIYA_IZIN_ID FROM TBL_PER_CALISMA_PLANI WHERE PER_ID = '"+kimlik+"' ORDER BY convert(date,TARIH)",licanceId,"GRUP_CALISMA_PLANI")
        return WorkPlanForGroupData
    } catch (error) {
        return error
    }

}


exports.putWorkPlanForUser = async(licanceId,model) => {   
    try {
        // if (model.workPlanForUserModelsFrm.kimlik==undefined) {
            
            Cmd =   "EXEC [SP_PER_CALISMA_PLANI] '"+ model.workPlanForUserModelsFrm.startDate +"','"+ model.workPlanForUserModelsFrm.endDate +"','"+ model.selectData.Kimlik +"','"+ model.workPlanForUserModelsFrm.sunday +"','"+ model.workPlanForUserModelsFrm.monday +"','"+ model.workPlanForUserModelsFrm.tuesday +"','"+ model.workPlanForUserModelsFrm.wednesday +"','"+ model.workPlanForUserModelsFrm.thursday +"','"+ model.workPlanForUserModelsFrm.friday +"','"+ model.workPlanForUserModelsFrm.saturday +"','PER'"
        // }
        // else{
            // Cmd = "" // buraya bak tuna !!!"UPDATE TBL_PER_CALISMA_PLANI SET VARDIYA_IZIN_ID = '"+ model.workPlanForUserModelsFrm.VARDIYA_IZIN_ID +"' WHERE kimlik = "+ model.workPlanForGroupModelsFrm.kimlik 
        // }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"PER_CALISMA_PLANI_EKLE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}


exports.deleteworkPlanForUser = async(licanceId,model) => {

    try {
        let deletePlan = await socketEvent.Event("DELETE FROM TBL_PER_CALISMA_PLANI WHERE kimlik = '"+model.kimlik+"'",licanceId,"PER_CALISMA_PLANI_DELETE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

//-----------------
exports.putMontlySchedule = async(licanceId,model,companyCode) => {   
    licanceId = await control._licanceControl(licanceId)
    let montlyScheduleData
    try {

        if (model.startDate==undefined || model.startDate== "" ){
            
            Cmd =  "UPDATE TBL_PERHAR SET ONAY = '" + model.approval +"' , ACIKLAMA = '" + model.description +"' , KULLANICI = '" + model.loginUser +"' where kimlik = '" + model.perharID +"'"
            montlyScheduleData = await socketEvent.Event(Cmd,licanceId,"montlyScheduleData")
            response.message="Ok"
            response.status="True"
            response.data=""       
            return response
        }
        else{
        
            let str = ""
            if(companyCode != "0") {
                str = "WHERE SUBE_KODU = '" + companyCode +"'"
            }
    
            Cmd =  "SELECT * FROM [FUNC_PER_ONAY]  ('" + model.startDate +"','"+model.endDate+"',NULL) " +str+" ORDER BY PERSONEL_ADI,TARIH "
            montlyScheduleData = await socketClient.getData(Cmd,licanceId,"TBL_PER")
            return montlyScheduleData
        }  
    } catch (error) {
        return error
    }
}


//------------------ TITLE
    
exports.getTitleList = async(licanceId,companyCode) => 
{
    try {
        let getDataString = "SELECT kimlik,UNVAN_ADI,(SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER_UNVAN.SUBE_KODU) AS SUBE_KODU FROM TBL_PER_UNVAN"
        getDataString += await control._companyCodeControl(companyCode)
        licanceId = await control._licanceControl(licanceId)
        let titleData = await socketClient.getData(getDataString,licanceId,"TBL_PER_UNVAN")
    return titleData
    } catch (error) {
        return error
    }

}




exports.deleteTitle = async(licanceId,kimlik) => {
    licanceId = await control._licanceControl(licanceId)
    try {
        let deleteTitle = await socketEvent.Event("DELETE FROM TBL_PER_UNVAN WHERE kimlik = '"+kimlik+"'",licanceId,"UNVAN_DELETE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

exports.putTitle = async(licanceId,model,companyCode ) => {   
    try {
        licanceId = await control._licanceControl(licanceId)
        if (model.kimlik==undefined || model.kimlik== "" || model.kimlik== "0" ){
            
            Cmd =  "INSERT INTO TBL_PER_UNVAN (UNVAN_ADI,SUBE_KODU) VALUES ('" + model.UNVAN_ADI +"','" + companyCode +"')" 
        }
        else{
            Cmd =  "UPDATE TBL_PER_UNVAN SET UNVAN_ADI = '"+ model.UNVAN_ADI +"'  WHERE kimlik = "+ model.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"UNVAN_PUT")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}
//-------------------TITLE END