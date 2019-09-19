
const staffController = require('../controller/staffController');

const staffRoute = [
    {
    method: 'GET',
    url: '/api/staff',
    handler: staffController.getStaffList,
    schema: {
        description: 'Personel Listesini Getirir.',
        tags: ['Staff'],
        summary: 'Personel Listesini Getirir.'
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

module.exports = staffRoute