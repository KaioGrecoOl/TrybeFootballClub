import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import matches from '../database/models/matches'

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test matches route get', () => {
  afterEach(() => sinon.restore());

  let chaiHttpResponse: Response;

  it('test status getAllTeams', async () => {
    const matches =
    [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      }
    ];
    chaiHttpResponse = await chai.request(app)
    .get('/matches')
    .send(matches)
    expect(chaiHttpResponse.status).to.be.equal(200)
  })

  it('test if getAllMatches is a array', async () => {
    const matches =
    [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      }
    ];
    chaiHttpResponse = await chai.request(app)
    .get('/matches')
    .send(matches)
    expect(chaiHttpResponse.body).to.be.a('array')
  })

  it('test status created matches', async () => {
    const createdMatches =
    {
      "homeTeam": 16,
      "awayTeam": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
    }
    chaiHttpResponse = await chai.request(app)
    .post('/matches')
    .send(createdMatches)
    expect(chaiHttpResponse.status).to.be.equal(201)
  })

  it('test property of created matches', async () => {
    const createdMatches =
    {
      "homeTeam": 16,
      "awayTeam": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
    }
    chaiHttpResponse = await chai.request(app)
    .post('/matches')
    .send(createdMatches)
    expect(chaiHttpResponse.body).to.have.property('homeTeam')
  })

  it('test route patch of matches', async () => {
    const updatedMatches =
    {
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
    }
    chaiHttpResponse = await chai.request(app)
    .patch('/matches/2')
    .send(updatedMatches)
    expect(chaiHttpResponse.body).to.have.a('object')
  })

  it('test route patch of matches message', async () => {
    const updatedMatches =
    {
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
    }
    chaiHttpResponse = await chai.request(app)
    .patch('/matches/2')
    .send(updatedMatches)
    expect(chaiHttpResponse.body.message).to.equal('Updated')
  })

  it('test route patch of matches updated progress', async () => {
    const updatedMatches =
    {
      "inProgress": false,
    }
    chaiHttpResponse = await chai.request(app)
    .patch('/matches/3/finish')
    .send(updatedMatches)
    expect(chaiHttpResponse.body.message).to.equal('Finished')
  })

  it('test route patch of matches updated status', async () => {
    const updatedMatches =
    {
      "inProgress": false,
    }
    chaiHttpResponse = await chai.request(app)
    .patch('/matches/3/finish')
    .send(updatedMatches)
    expect(chaiHttpResponse.status).to.be.equal(200)
  })
});
