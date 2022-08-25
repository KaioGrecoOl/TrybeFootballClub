import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import teams from '../database/models/teams'

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test teams route get', () => {
  afterEach(() => sinon.restore());

  let chaiHttpResponse: Response;

  it('test status getAllTeams', async () => {
    const teams =
    [
      {
        team_name: 'Avaí/Kindermann',
      },
      {
        team_name: 'Bahia',
      },
      {
        team_name: 'Botafogo',
      },
      {
        team_name: 'Corinthians',
      },
      {
        team_name: 'Cruzeiro',
      },
      {
        team_name: 'Ferroviária',
      },
      {
        team_name: 'Flamengo',
      },
      {
        team_name: 'Grêmio',
      },
      {
        team_name: 'Internacional',
      },
      {
        team_name: 'Minas Brasília',
      },
      {
        team_name: 'Napoli-SC',
      },
      {
        team_name: 'Palmeiras',
      },
      {
        team_name: 'Real Brasília',
      },
      {
        team_name: 'Santos',
      },
      {
        team_name: 'São José-SP',
      },
      {
        team_name: 'São Paulo',
      },
    ];
    chaiHttpResponse = await chai.request(app)
    .get('/teams')
    .send(teams)
    expect(chaiHttpResponse.status).to.be.equal(200)
  })

  it('test if getAllTeams is a array', async () => {
    const teams =
    [
      {
        team_name: 'Avaí/Kindermann',
      },
      {
        team_name: 'Bahia',
      },
      {
        team_name: 'Botafogo',
      },
      {
        team_name: 'Corinthians',
      },
      {
        team_name: 'Cruzeiro',
      },
      {
        team_name: 'Ferroviária',
      },
      {
        team_name: 'Flamengo',
      },
      {
        team_name: 'Grêmio',
      },
      {
        team_name: 'Internacional',
      },
      {
        team_name: 'Minas Brasília',
      },
      {
        team_name: 'Napoli-SC',
      },
      {
        team_name: 'Palmeiras',
      },
      {
        team_name: 'Real Brasília',
      },
      {
        team_name: 'Santos',
      },
      {
        team_name: 'São José-SP',
      },
      {
        team_name: 'São Paulo',
      },
    ];
    chaiHttpResponse = await chai.request(app)
    .get('/teams')
    .send(teams)
    expect(chaiHttpResponse.body).to.be.a('array')
  })
});
