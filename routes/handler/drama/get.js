const { Drama } = require('../../../models')

module.exports = async (req, res) => {
    const ids = req.query.ids
    const pageAsNumber = Number.parseInt(req.query.page)
    const sizeAsNumber = Number.parseInt(req.query.size)

    let page = 0
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber - 1
    }

    let size = 5
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
        size = sizeAsNumber
    }

    const sqlOptions = {
        limit: size,
        offset: page * size,
        attributes: ['title', 'slug', 'category', 'content', 'episodes', 'release_date', 'trailer']
    }

    if (ids) {
        sqlOptions.where = {
            id: ids
        }
    }

    const dramas = await Drama.findAll(sqlOptions)

    if (!dramas.length) {
        return res.status(404).json({
            status: 'error',
            message: 'No dramas found'
        })
    }

    return res.json({
        status: 'success',
        data: dramas
    })

}
