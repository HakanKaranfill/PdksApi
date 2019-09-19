
const workGroupController = require('../controller/workGroupController');

const workGroupRoute = [
    {
    method: 'GET',
    url: '/api/WorkGroups',
    handler: workGroupController.getWorkGroupData,
    schema: {
        description: 'Çalışma Gruplarını Listeler.',
        tags: ['WorkGroup'],
        summary: 'Çalışma Gruplarını Listeler.'
    }
} 
,
{
    method: 'PUT',
    url: '/api/workGroup',
    handler: workGroupController.saveWorkGroup,
    schema: {
        description: 'Yeni Çalışma Grubu Ekler .',
        tags: ['WorkGroup'],
        summary: 'Yeni Çalışma Grubu Ekler.'
    }
}
]

module.exports = workGroupRoute