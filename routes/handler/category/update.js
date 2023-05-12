const { Category } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    const id = req.params.id
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

    const category = await Category.findByPk(id)

    if (!category) {
        return res.status(404).json({
            status: 'error',
            message: 'Category is not exists'
        })
    }

    const data = { slug, name }

    const updated = await category.update(data)

    return res.json({
        status: 'success',
        data: updated
    })

}