const { Movie } = require('../../../models')

module.exports = async (req, res) => {
    const slug = req.params.slug

    const movie = await Movie.findOne({
        where: { slug }
    })

    if (!movie) {
        return res.status(404).json({
            status: 'error',
            message: 'Movie not found'
        })
    }

    await Movie.destroy({
        where: { slug }
    })

    return res.json({
        status: 'success',
        message: 'Movie has been deleted'
    })

}