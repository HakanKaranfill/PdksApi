
const staffController = require('../controller/staffController');

const staffRoute = [
   
    {
        method: 'POST',
        url: '/api/staff',
        handler: staffController.getStaffList,
        //  workPlanForGroupController.putWorkPlanForGroup,
        schema: {
            description: 'Personel Listesini Getirir.',
            tags: ['Staff'],
            summary: 'Personel Listesini Getirir.',
            body: {
                type: 'object',
                properties: {
                    companyCode: {
                        type: 'number'
                    },
                    licanceId: {
                        type: 'number'
                    }
                }
            }
        }
    }
//     {
//     method: 'GET',
//     url: '/api/staff',
//     handler: staffController.getStaffList,
//     schema: {
//         description: 'Personel Listesini Getirir.',
//         tags: ['Staff'],
//         summary: 'Personel Listesini Getirir.'
//     }
// } 
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