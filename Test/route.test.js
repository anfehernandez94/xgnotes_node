const supertest = require('supertest');

const app = require("../server")

const { expect } = require('chai');

const note = {
    title: "Nota test",
    description: "Descripción de la Nota test",
    creationDate: '2023-12-12',
    status: 'pendiente',
}

const noteIncomplete = {
    description: "Descripción de la Nota test",
    creationDate: '2023-12-12',
    status: 'pendiente',
}

let noteId = 1

describe('Rutas de la aplicación con POST', () => {

    it('debería devolver un código de estado 201 para la ruta "/notes"', async () => {
        const response = await supertest(app).post('/notes')
            .send(note)
            .set('Accept', 'application/json');
        expect(response.status).to.equal(201);
        expect(response._body).to.have.property('noteId');

        noteId = await response._body.noteId
        console.log('ID del nuevo registro:', noteId);
    });

    it('debería devolver un código de estado 500 para la ruta "/notes"', async () => {
        const response = await supertest(app).post('/notes')
            .send(noteIncomplete)
            .set('Accept', 'application/json');
        expect(response.status).to.equal(500);
    });

});

describe('Rutas de la aplicación con GET', () => {

    it('debería devolver un código de estado 404 para la ruta "/"', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).to.equal(404);
    });

    it('debería devolver un código de estado 200 para la ruta "/notes"', async () => {
        const response = await supertest(app).get('/notes');
        expect(response.status).to.equal(200);
    });

    it(`debería devolver un código de estado 200 para la ruta "/notes/${noteId}"`, async () => {
        const response = await supertest(app).get(`/notes/${noteId}`);
        expect(response.status).to.equal(200);
    });

    it('debería devolver un código de estado 204 para la ruta "/notes/111111111"', async () => {
        const response = await supertest(app).get('/notes/111111111');
        expect(response.status).to.equal(204);
    });

});


describe('Rutas de la aplicación con PUT', () => {

    it('debería devolver un código de estado 404 para la ruta "/notes"', async () => {
        const response = await supertest(app).put('/notes')
            .send(note)
            .set('Accept', 'application/json');
        expect(response.status).to.equal(404);
    });

    it(`debería devolver un código de estado 200 para la ruta "/notes/${noteId}"`, async () => {
        const response = await supertest(app).put(`/notes/${noteId}`)
            .send(note)
            .set('Accept', 'application/json');
        expect(response.status).to.equal(200);
    });

    it('debería devolver un código de estado 204 para la ruta "/notes/111111111"', async () => {
        const response = await supertest(app).put('/notes/111111111')
            .send(note)
            .set('Accept', 'application/json');;
        expect(response.status).to.equal(204);
    });

});

describe('Rutas de la aplicación con DELETE', () => {

    it('debería devolver un código de estado 404 para la ruta "/notes"', async () => {
        const response = await supertest(app).delete('/notes')
        expect(response.status).to.equal(404);
    });

    it(`debería devolver un código de estado 200 para la ruta "/notes/${noteId}"`, async () => {
        const response = await supertest(app).delete(`/notes/${noteId}`)
        expect(response.status).to.equal(200);
    });

    it('debería devolver un código de estado 404 para la ruta "/notes/111111111"', async () => {
        const response = await supertest(app).delete('/notes/111111111');
        expect(response.status).to.equal(404);
    });

});

