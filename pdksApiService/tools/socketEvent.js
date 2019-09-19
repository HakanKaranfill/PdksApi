exports.Event = async function (sqlCode, licId) {

    //Client üzerine sql sorgularında "+" işareti olursa http postta gondermiyor gondermeden once karakterleri degistir.
    while (sqlCode.match('\\+') != null) {
        sqlCode = sqlCode.replace("+", "%2B")
    }
    let rp = require('request-promise');
    let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        url: 'https://socketio.kerzz.com:1443',
        body: "action=connectClient&subAction=getTable&sql=" + sqlCode + " &licanceID=" + licId
    };

    return rp(options)
        .then(function (body) {
            let err
            let clientData = body
            if (clientData.responseType != null) { //Client sql hatasi gelirse
                err = Error("SOCKET: ERR - " + licId + ":" + clientData.responseMessage)
                throw err
            } else { //* Basarili
                console.log("SOCKET: OK - " + licId);
                return clientData
            }
        })
        .catch(function (err) {
            console.log
            return err;
        });
    }
