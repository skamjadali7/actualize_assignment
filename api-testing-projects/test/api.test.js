const expect = require('chai').expect;
const request = require('request');;
// import {app} from './../mock-apis/source/server.js'
// Import your Express.js application
const app = require('api-testing-projects\mock-apis\source\server.js');

describe('Express App Endpoints', () => {
    describe('POST /users/register', () => {
        it('should return 200 OK and register a new user', async () => {
            const userData = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            };

            const res = await request(app)
                .post('/users/register')
                .send(userData);

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('userId');
            expect(res.body).to.have.property('message', 'User registered successfully');
        });
    });
    describe('POST /users/login', () => {
        it('should return 200 OK and login a user', async () => {
            const loginData = {
                username: 'testuser',
                password: 'password123'
            };

            const res = await request(app)
                .post('/users/login')
                .send(loginData);

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('userId');
            expect(res.body).to.have.property('token');
        });
    });
    describe('GET /books', () => {
        it('should return 200 OK and search for books', async () => {
            const searchQuery = 'Harry Potter';

            const res = await request(app)
                .get('/books')
                .query({ search: searchQuery });

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
        });
    });
    describe('POST /users/{userId}/cart', () => {
        it('should return 200 OK and add a book to the user\'s cart', async () => {
            const userId = '123'; // Mock user ID
            const cartData = {
                bookId: '456', // Mock book ID
                quantity: 1
            };

            const res = await request(app)
                .post(`/users/${userId}/cart`)
                .send(cartData);

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('message', 'Book added to cart successfully');
        });
    });

    describe('POST /users/{userId}/checkout', () => {
        it('should return 200 OK and successfully checkout', async () => {
            const userId = '123'; // Mock user ID

            const res = await request(app)
                .post(`/users/${userId}/checkout`);

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('message', 'Checkout successful');
        });
    });
});
