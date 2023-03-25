const Controller = require('../controllers/controller')


module.exports = (app) => {
    app.get('/api/stores', Controller.getAll)
    app.get('/api/stores/:id', Controller.getOne)
    app.post('/api/stores', Controller.create)
    app.put('/api/stores/:id', Controller.updateOne)
    app.delete('/api/stores/:id', Controller.deleteOne)
}   