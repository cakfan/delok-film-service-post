const request = require('supertest')
const app = require('../app')

describe('Drama module', () => {
    describe('GET /drama', () => {
        describe('GET /drama', () => {
            it('should return success', async () => {
                await request(app)
                    .get('/drama')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
        })
        describe('POST /drama', () => {
            it('should return success', async () => {
                await request(app)
                    .post('/drama')
                    .send({
                        title: "Drama Satu",
                        slug: "drama-satu-dua",
                        category: "1,2,3,4",
                        content: "This is content movie satu",
                        episodes: 12
                    })
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return invalid', async () => {
                await request(app)
                    .post('/drama')
                    .send({})
                    .expect('Content-Type', /json/)
                    .expect(406)
            })
        })
        describe('DELETE /drama', () => {
            it('should return success', async () => {
                await request(app)
                    .delete('/drama/4')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return not found', async () => {
                await request(app)
                    .delete('/drama/4')
                    .expect('Content-Type', /json/)
                    .expect(404)
            })
        })
    })
})
