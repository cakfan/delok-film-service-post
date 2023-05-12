const { Movie } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {

    const schema = {
        title: 'string|empty:false',
        slug: 'string|empty:false',
        category: 'string|empty:false',
        content: 'string|empty:false',
        release_date: 'date|optional:true',
        trailer: 'string|optional:true'
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const slug = req.body.slug

    const movie = await Movie.findOne({
        where: { slug }
    })

    if (movie) {
        return res.status(409).json({
            status: 'error',
            message: 'Movie already exists'
        })
    }

    const createMovie = await Movie.create(req.body)

    return res.json({
        status: 'success',
        data: createMovie
    })
}
