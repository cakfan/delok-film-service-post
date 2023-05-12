const { Category } = require('../../../models')

module.exports = async (req, res) => {
    const id = req.params.id

    const category = await Category.findByPk(id)

    if (!category) {
        return res.status(404).json({
            status: 'error',
            message: 'Category not found'
        })
    }

    await category.destroy()

    return res.json({
        status: 'success',
        message: 'Category has been deleted'
    })

}