var uuid = require('uuid-random');

module.exports = {
    inserirNovoItem,
}

function inserirNovoItem(body, res) {
     var db = require('../config/database');
        var item = db.Mongoose.model('temperatura', db.ItemSchema, 'temperatura');
        const novoUuid = uuid();
        var novoItem = new item({ uuid: novoUuid, owner: body.owner, measure: body.measure,
            latitude: body.latitude, longitude: body.longitude, topic: `sensor/${novoUuid}/data`});
        novoItem.save(function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                res.end();
                return;
            }
            res.json(novoItem);
            res.end();
        });
}