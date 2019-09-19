class responseModel {
    constructor() {
            this.data=null,//* geri dönen değer
            this.message='',//*geri dönüş mesaj
            this.status='' //*hata durumu            
    }
}

module.exports = {
    responseModel: responseModel,
 }