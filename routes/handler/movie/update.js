const { Movie } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const { title, category, content, release_date, trailer } = req.body

    const schema = {
        title: 'string|empty:false',
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

    const slug = req.params.slug

    const movie = await Movie.findOne({
        where: { slug }
    })

    if (!movie) {
        return res.status(404).json({
            status: 'error',
            message: 'Movie is not exists'
        })
    }

    const data = { title, category, content, release_date, trailer }

    const updated = await movie.update(data)

    return res.json({
        status: 'success',
        data: updated
    })

}