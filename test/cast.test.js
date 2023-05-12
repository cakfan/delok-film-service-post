const request = require('supertest')
const app = require('../app')

describe('Cast module', () => {
    describe('GET /cast', () => {
        describe('GET /cast', () => {
            it('should return success', async () => {
                await request(app)
                    .get('/cast')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
        })
        describe('POST /cast', () => {
            it('should return success', async () => {
                await request(app)
                    .post('/cast')
                    .send({
                        post_id: 3,
                        people_id: 2,
                        post_type: 'movie'
                    })
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return invalid', async () => {
                await request(app)
                    .post('/cast')
                    .send({})
                    .expect('Content-Type', /json/)
                    .expect(406)
            })
        })
        describe('DELETE /cast', () => {
            it('should return success', async () => {
                await request(app)
                    .delete('/cast/4')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return not found', async () => {
                await request(app)
                    .delete('/cast/4')
                    .expect('Content-Type', /json/)
                    .expect(404)
            })
        })
    })
})
