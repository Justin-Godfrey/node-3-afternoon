module.exports = {
    create: (req, res, next) => {
        const database = req.app.get('db')
        const {name, description, price, image_url} = req.body

        database.create_product([name, description, price, image_url]).then(() => 
        res.sendStatus(200)).catch( err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
    },

    getOne: (req, res, next) => {
        const database = req.app.get('db')
        const {id} = req.params

        database.read_product(id).then(product => res.statys(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
    },

    getAll: (req, res, next) => {
        const database = req.app.get('db')

        database.read_products().then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
    },

    update: (req, res, next) => {
        const database = req.app.get('db')
        const {params, query} = req

        database.update_product([params.id, query.desc]).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(err)
        })
    },

    delete: (req, res, next) => {
        const database = req.app.get('db')
        const {id} = req.params

        database.delete_product(id).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
    }
}