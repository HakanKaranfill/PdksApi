
const shiftController = require('../controller/shiftController');

const shiftRoute = [
    {
    method: 'GET',
    url: '/api/shift',
    handler: shiftController.getShiftList,
    schema: {
        description: 'Vardiye Listesini Getirir.',
        tags: ['Shift'],
        summary: 'Vardiye Listesini Getirir.'
    }
} 
// ,
// {
//     method: 'POST',
//     url: '/api/permission',
//     handler: staffController.saveStaff,
//     schema: {
//         description: 'Yeni Personel Ekler.',
//         tags: ['Staff'],
//         summary: 'Yeni Personel Ekler.'
//     }
// }
]

module.exports = shiftRoute