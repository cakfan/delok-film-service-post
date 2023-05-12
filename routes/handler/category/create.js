const { Category } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {

    const { slug, name } = req.body

    const schema = {
        slug: 'string|empty:false',
        name: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema)

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const data = {
        slug, name
    }

    const createCategory = await Category.create(data)

    return res.json({
        status: 'success',
        data: createCategory
    })
}
