
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
,
{
    method: 'PUT',
    url: '/api/staff',
    handler: staffController.updateStaff,
    schema: {
        description: 'Personel Bilgilerini Günceller',
        tags: ['Staff'],
        summary: 'Personel Bilgilerini Günceller'
    }
}
]

module.exports = staffRoute