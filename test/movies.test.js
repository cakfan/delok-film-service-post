const request = require('supertest')
const app = require('../app')

describe('Movie module', () => {
    describe('GET /movie', () => {
        describe('GET /movie', () => {
            it('should return success', async () => {
                await request(app)
                    .get('/movie')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
        })
        describe('POST /movie', () => {
            it('should return success', async () => {
                await request(app)
                    .post('/movie')
                    .send({
                        title: "Movie Satu",
                        slug: "movie-satu-dua",
                        category: "1,2,3,4",
                        content: "This is content movie satu"
                    })
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return invalid', async () => {
                await request(app)
                    .post('/movie')
                    .send({})
                    .expect('Content-Type', /json/)
                    .expect(406)
            })
        })
        describe('DELETE /movie', () => {
            it('should return success', async () => {
                await request(app)
                    .delete('/movie/4')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return not found', async () => {
                await request(app)
                    .delete('/movie/4')
                    .expect('Content-Type', /json/)
                    .expect(404)
            })
        })
    })
})
