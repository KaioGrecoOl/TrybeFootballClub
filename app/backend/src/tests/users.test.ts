import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test login route Post response', () => {
  afterEach(() => sinon.restore());

  let chaiHttpResponse: Response;

  it('email fild empty status', async () => {
  
    const emptyEmail = {
      password: "secret"
    }
    chaiHttpResponse = await  chai.request(app)
    .post('/login')
    .send(emptyEmail)
    expect(chaiHttpResponse.status).to.be.equal(400)
  })

  it('password fild empty status', async () => {
  
    const emptypassword = {
      email: 'admin@admin.com'
    }
    chaiHttpResponse = await chai.request(app)
    .post('/login')
    .send(emptypassword)
    expect(chaiHttpResponse.status).to.be.equal(400)
  })

  it(' incorrect email and password status', async () => {
  
    const wrongCredentials = {
      email: "kiog@adm.com",
      password: "kaio"
    }
    chaiHttpResponse = await chai.request(app)
    .post('/login')
    .send(wrongCredentials)
    expect(chaiHttpResponse.body.message).to.be.deep.equal('Incorrect email or password');
  })

  it(' valid credentials', async () => {
  
    const validCredentials = {
      email: "admin@admin.com",
      password: "secret_admin"
    }
    chaiHttpResponse = await chai.request(app)
    .post('/login')
    .send(validCredentials)
    expect(chaiHttpResponse.body).to.have.property('token');
  })
});
