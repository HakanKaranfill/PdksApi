exports.config = {
    routePrefix: '/help',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Kerzz PDKS',
        description: 'Kerzz PDKS Service',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'http:pdsk.com',
        description: 'Kerzz PDKS Service'
      },
      host: '127.0.0.1:5001', //TODO Dış Api Yaz
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'Staff', description: 'İşletmeye Ait Tüm Personel Listesini Verir.' } ,
        { name: 'Permission', description: 'İşletmeye Ait Tatil / İzin Listesini Verir.' },
        { name: 'Shift', description: 'İşletmeye Ait Vardiye Listesini Verir.' },
        { name: 'WorkGroup', description: 'İşletmeye Ait Çalışma Gruplarını Verir.' },
        { name: 'workPlanForGroup', description: 'Gruplara Bağlı Çalışma Planı Listesini Verir.' },
        { name: 'WorkPlanForUser', description: 'Kullanıcılara Bağlı Çalışma Planı Listesini Verir.' }
      ]
    }
  }