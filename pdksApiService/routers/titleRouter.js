const titleController = require('../controller/titleController');
const titleRoute = [
//     {
//     method: 'GET',
//     url: '/api/title',
//     handler: titleController.getTitleList,
//     schema: {
//         description: 'Ünvan Listesini Getirir.',
//         tags: ['title'],
//         summary: 'Ünvan Listesini Getirir.'
//     }
// } 

// ,
{
    method: 'PUT',
    url: '/api/title',
    handler: titleController.putTitle,
    schema: {
        description: 'Yeni Ünvan Ekler.',
        tags: ['title'],
        summary: 'Yeni Ünvan Ekler.'
        
    }
}
,    
{
    method: 'POST',
    url: '/api/title',
    handler: titleController.getTitleList,
    //  workPlanForGroupController.putWorkPlanForGroup,
    schema: {
        description: 'Ünvan Listesini Getirir.',
        tags: ['title'],
        summary: 'Ünvan Listesini Getirir.',
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
,
{
    method: 'DELETE',
    url: '/api/title',
    handler: titleController.deleteTitle,
    schema: {
        description: 'Seçilen Ünvanı Siler.',
        tags: ['title'],
        summary: 'Seçilen Ünvanı Siler.'
    }
}
]

module.exports = titleRoute