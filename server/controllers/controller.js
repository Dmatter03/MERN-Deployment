const { Store } = require('../models/model');



module.exports.getAll = (req, res) => {
    Store.find({}, null, {$sort: { number: 1 } })
    .then((dbResults) => {
        res.json(dbResults);
    })
    .catch((dbError) => {
        res.status(400).json('This is my Get all route', dbError)
    })
}


module.exports.create = (req, res) => {

    Store.create(req.body)
    .then((dbResults) => {
        res.json(dbResults)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })
}



module.exports.getOne = (req, res) => {
    Store.findOne({ _id: req.params.id })
    .then((dbResults) => {
        res.json(dbResults)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })

}


module.exports.updateOne = (req, res) => {
    Store.findOneAndUpdate({ _id: req.params.id }, req.body, { 
        new: true,
        runValidators: true,
    })
    .then((dbResults) => {
        res.json(dbResults)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })

}

module.exports.deleteOne = (req, res) => {
    Store.deleteOne({ _id: req.params.id })
    .then((dbResults) => {
        res.json(dbResults)
    })
    .catch((dbError) => {
        res.status(400).json(dbError)
    })
}


























