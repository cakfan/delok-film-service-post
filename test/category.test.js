const request = require('supertest')
const app = require('../app')

describe('Category module', () => {
    describe('GET /category', () => {
        describe('GET /category', () => {
            it('should return success', async () => {
                await request(app)
                    .get('/category')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
        })
        describe('POST /category', () => {
            it('should return success', async () => {
                await request(app)
                    .post('/category')
                    .send({
                        name: "Test Category",
                        slug: "test-category"
                    })
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return invalid', async () => {
                await request(app)
                    .post('/category')
                    .send({})
                    .expect('Content-Type', /json/)
                    .expect(406)
            })
        })
        describe('DELETE /category', () => {
            it('should return success', async () => {
                await request(app)
                    .delete('/category/4')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return not found', async () => {
                await request(app)
                    .delete('/category/4')
                    .expect('Content-Type', /json/)
                    .expect(404)
            })
        })
    })
})
