const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// Test Data
const book = {
    bookId: 1,
    title: 'The Lion and The Jewel',
    author: 'George Orwell',
    snippet: 'Bombastic Book',
    uploadedBy: 'Traver Mike'
}

describe('/GET book(s)', () => {
    it('should GET all books', (done) => {
        chai.request(app)
            .get('/books')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.be.eql(4)
                res.body[0].should.be.an('object')
                res.body[0].should.have.property('author', 'Chinue Achebe')
                done()
            })
    })
    it('it should GET book with bookid equal 4', (done) => {
        chai.request(app)
            .get('/books/' + book.bookId)
            .send(book)
            .end((err, res) => {
                res.should.have.status(200)
                done();
            })
    })
})
describe('/POST and Update BOOK', () => {
    it.skip('it should not post a book without snippet field', (done) => {
        chai.request(app)
            .post('/books')
            .send(book)
            .end((err, res) => {
                res.should.have.status(200);
                done()
            })
    })
    // it('should update book with 1', (done) => {
    //     chai.request(app)
    //         .put('/books' + book.bookId)
    //         // .set('author', 'Ola Rotime')
    //         .send(book)
    //         .end((err, res) => {
    //             res.should.have.status(200)
    //             done()
    //         })
    // })
})

// describe('Books', () => {
//     afterEach((done) => {
//         pool.query(`DELETE FROM books WHERE bookid = ${book.bookid}`)
//         done()
//     })
// })
