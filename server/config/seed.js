/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Denunciation = require('../api/denunciation/denunciation.model');
var User = require('../api/user/user.model');

Denunciation.find({}).remove(function() {
    Denunciation.create({
        name: "Dona Amélia",
        address: "Rua do desperdicío, 111",
        date: "25/07/2015",
        hour: "15:35",
        description: "Uma senhora meio rabugenta lavando a rua, repete o mesmo ato todo santo dia"
    }, {
        name: "Seu Rubens",
        address: "Rua do desperdicío, 345",
        date: "24/07/2015",
        hour: "10:00",
        description: "Todo dia o seu Rubens Lava o carro"
    }, {
        name: "Carlos Alberto de Nóbrega",
        address: "Rua da praça, 111",
        date: "15/07/2015",
        hour: "23:00",
        description: "Várias piadas sem graça sobre desperdício de Água."
    }, {
        name: "Mussun Ipsum",
        address: "Rua dos Loren Ipsum, 111",
        date: "25/07/2015",
        hour: "15:35",
        description: "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis."
    });
});

User.find({}).remove(function() {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@test.com',
        password: 'test'
    }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'admin'
    }, function() {
        console.log('finished populating users');
    });
});
