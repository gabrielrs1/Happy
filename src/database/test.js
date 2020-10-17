const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async function(db) {
    // inserir dados na tabela
    await saveOrphanage(db, {
        id: 2,
        lat: '-27.219004',
        lng: '-49.6526649',
        name: 'Lar dos meninas',
        about: 'Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '35235232',
        images: [
            'https://images.unsplash.com/photo-1600712243809-7a3dd4e68fff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1573261524391-266433971be1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horários de visitas Das 18h até 8h',
        open_on_weekends: '0'
    })

    // // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // // deletar dado da tabela 
    // await db.run("DELETE FROM orphanages WHERE id = '2'")
})