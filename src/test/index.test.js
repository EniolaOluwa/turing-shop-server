import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const { expect } = chai;
chai.use(chaiHttp);

describe('Check if app serves properly', async () => {
  const response = await chai.request(server).get('/');
  it('Should return a status 200', () => {
    expect(response).to.have.status(200);
  });
  // it('Should be in JSON format', () => {
  //   expect(response).to.be.a('json');
  // });
});
