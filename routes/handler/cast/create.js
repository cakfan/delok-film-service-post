const { Cast } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {

    const { post_id, people_id, post_type } = req.body

    const schema = {
        post_id: 'number|empty:false',
        people_id: 'number|empty:false',
        post_type: { type: 'enum', values: ['movie', 'drama'] }
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const id = post_type === 'movie' ? { movie_id: post_id } : { drama_id: post_id }

    const data = {
        ...id,
        people_id
    }

    const createCast = await Cast.create(data)

    return res.json({
        status: 'success',
        data: createCast
    })
}
