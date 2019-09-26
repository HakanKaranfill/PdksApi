
const shiftAndPermissionContoller = require('../controller/shiftAndPermissionContoller');

const shiftAndPermissionRoute = [
    {
    method: 'GET',
    url: '/api/shiftAndPermission',
    handler: shiftAndPermissionContoller.getShiftAndPermissionList,
    schema: {
        description: 'Tatil / izin / Vardiya Listesini Getirir.',
        tags: ['shiftAndPermission'],
        summary: 'Tatil / izin / Vardiya Listesini Getirir.'
    }
} 

]

module.exports = shiftAndPermissionRoute