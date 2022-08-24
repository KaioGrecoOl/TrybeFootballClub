import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import users from '../database/models/users'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test login route Post response', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon.stub(users, 'findOne').resolves(emptyEmail as users)
  });

  afterEach(() => {
    sinon.restore();
  });

  const emptyEmail = {
    password: "secret"
  }

  it('email fild empty status', async () => {
    chaiHttpResponse = await  chai.request(app)
    .post('/login')
    .send(emptyEmail)
    expect(chaiHttpResponse.status).to.be.equal(400)
  })
});
