const { Cast } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const id = req.params.id
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

    const cast = await Cast.findByPk(id)

    if (!cast) {
        return res.status(404).json({
            status: 'error',
            message: 'Cast is not exists'
        })
    }

    const data = { post_id, people_id, post_type }

    const updated = await cast.update(data)

    return res.json({
        status: 'success',
        data: updated
    })

}