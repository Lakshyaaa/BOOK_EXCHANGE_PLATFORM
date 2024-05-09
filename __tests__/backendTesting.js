const request = require('supertest');
const assert = require('assert');
const express = require('express');

const server = 'http://localhost:3000';

describe('Router Integration', () => {
    describe('/addOldBook', () => {
        describe('POST', () => {
            xit('responds with a 200 status and a json Object', () => {
              const test = {isbn: '0547928211', condition: 'fine'}
                return request(server)
                .post('/api/addOldBook')
                .send(test)
                .expect('Content-Type', /json/)
                .expect(200)
            })
        })
    })
    describe('/getAllBooks', () => {
        describe('GET', () => {
            xit('responds with a 200 status and a json object /w books', () => {
                return request(server)
                .get('/api/getAllBooks')
                .expect('Content-Type', /json/)
                .expect(200)
            })
        })
    })
    describe('/getAllUsers', () => {
        describe('GET', () => {
            xit('responds with a 200 status and a json object /w users', () => {
                return request(server)
                .get('/api/getAllUsers')
                .expect('Content-Type', /json/)
                .expect(200)
            })
        })
    })
    describe('/getMyBookRequests', () => {
        describe('GET', () => {
            xit('respond with a 200 status and a json object w/ users_books', () => {
                return request(server)
                .get('/api/getMyBookRequests')
                .expect('Content-Type', /json/)
                .expect(200)
            })
            
        })
    })
    describe('/findOldBook', () => {
        describe('POST', () => {
            xit('responds with a 200 status and a json object', () => {
             const test = {searchString: 'Chemistry'};
                return request(server)
                .post('/api/findOldBook')
                .send(test)
                .expect('Content-Type', /json/)
                .expect(200)
            })
        })
    })
    describe('/requestBook', () => {
        describe('POST', () => {
            xit('responds with 200 status and a json object', () => {
              const test = { userID: 1, username: 'hannahbanana' , isbn: '0547928211'}
              return request(server)
              .post('/api/requestBook')
              .send(test)
              .expect('Content-Type', /json/)
              .expect(200)
            })
        })
    })
    
    describe('/deleteOldBook', () => {
        describe('POST', () => {
            xit('responds with 200 status and a json object', () => {
              const test = { myOldBookId: 14}
              return request(server)
              .post('/api/deleteOldBook')
              .send(test)
              .expect('Content-Type', /json/)
              .expect(200)
            })
        })
    })
    describe('/getMyOldBookList', () => {
        describe('GET', () => {
            xit('respond with a 200 status and a JSON object', () => {
                return request(server)
                .get('/api/getMyOldBookList')
                .expect('Content-Type', /json/)
                .expect(200)
            })
        })
    })

    describe('/register', () => {
        describe('POST', () => {
            xit('responds with 200 status and a json object', () => {
              const test = {
                  username: 'test321',
                  password: 'password123',
                  email: 'testemail',
                  phone: '1234567890',
                  address: '12345'
              }
              return request(server)
              .post('/api/register')
              .send(test)
              .expect('Content-Type', /json/)
              .expect(200)
            })
        })
    })
    
    describe('/verifyUser', () => {
        describe('POST', () => {
            xit('responds with 200 status and a json object', () => {
              const test = {
                  username: 'test321',
                  password: 'password123',
              }
              return request(server)
              .post('/api/verifyUser')
              .send(test)
              .expect('Content-Type', /json/)
              .expect(200)
            })
        })
    })
})

