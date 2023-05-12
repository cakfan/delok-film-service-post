const { Cast } = require('../../../models')

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
        attributes: ['id', 'movie_id', 'drama_id', 'people_id', 'created_at', 'updated_at']
    }

    if (ids) {
        sqlOptions.where = {
            id: ids
        }
    }

    const casts = await Cast.findAll(sqlOptions)

    if (!casts.length) {
        return res.status(404).json({
            status: 'error',
            message: 'No cast found'
        })
    }

    const newCasts = casts.map((cast) => {
        const type = cast.movie_id ? 'movie' : 'drama'
        return {
            id: cast.id,
            post_id: type === 'movie' ? cast.movie_id : cast.drama_id,
            people_id: cast.people_id,
            type
        }
    })

    return res.json({
        status: 'success',
        data: newCasts
    })

}
