const { Drama } = require('../../../models')

module.exports = async (req, res) => {
    const slug = req.params.slug

    const drama = await Drama.findOne({
        where: { slug }
    })

    if (!drama) {
        return res.status(404).json({
            status: 'error',
            message: 'Drama not found'
        })
    }

    await Drama.destroy({
        where: { slug }
    })

    return res.json({
        status: 'success',
        message: 'Drama has been deleted'
    })

}