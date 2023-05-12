const { Drama } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const { title, category, content, episodes, release_date, trailer } = req.body

    const schema = {
        title: 'string|empty:false',
        category: 'string|empty:false',
        content: 'string|empty:false',
        episodes: 'number|empty:false',
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

    const drama = await Drama.findOne({
        where: { slug }
    })

    if (!drama) {
        return res.status(404).json({
            status: 'error',
            message: 'Drama is not exists'
        })
    }

    const data = { title, category, content, episodes, release_date, trailer }

    const updated = await drama.update(data)

    return res.json({
        status: 'success',
        data: updated
    })

}