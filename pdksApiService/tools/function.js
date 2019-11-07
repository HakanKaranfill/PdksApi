exports._licanceControl = async function (licanceId) {
    if (licanceId == undefined) {
        licanceId = 2402
            }
            return licanceId
    }


exports._companyCodeControl = async function (companyCode) {
    let getDataString = ""
    if(companyCode != "0") {
        getDataString += " WHERE SUBE_KODU = "+companyCode
    }
    return getDataString
    }

    