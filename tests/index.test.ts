import { expect } from 'chai';
import httpMocks from 'node-mocks-http';
import errorHandler from '../src';

describe('test express error handler:', () => {
  it('if error status is 401, should return 401', () => {
    const httpStatus = 401;
    const errMsg = 'unauthorized user';
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error: any = new Error(errMsg);
    error.status = httpStatus;
    errorHandler()(error, req, res, () => {});
    const response = JSON.parse(res._getData());

    expect(response.status).to.be.equal(httpStatus);
    expect(response.error.message).to.be.equal(errMsg);
    expect(response.error.trace).to.be.equal(error.stack);
  });

  it('should return 500 as http status code, as error does not include any status', () => {
    const defaultHttpStatus = 500;
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error: any = new Error();
    errorHandler()(error, req, res, () => {});
    const response = JSON.parse(res._getData());

    expect(response.status).to.be.equal(defaultHttpStatus);
    expect(response.error.trace).to.be.equal(error.stack);
  });

  it('should return 401 as http status code without trace', () => {
    const httpStatus = 401;
    const errMsg = 'unauthorized user';
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error: any = new Error(errMsg);
    error.status = httpStatus;
    errorHandler({ trace: false })(error, req, res, () => {});
    const response = JSON.parse(res._getData());
  
    expect(response.status).to.be.equal(httpStatus);
    expect(response.error.trace).to.be.equal(undefined);
  });

  it('should return 500 as http status code is not valid', () => {
    const httpStatus = 600;
    const errMsg = 'internal server error';
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error: any = new Error(errMsg);
    error.status = httpStatus;
    errorHandler()(error, req, res, () => {});
    const response = JSON.parse(res._getData());
  
    expect(response.status).to.be.equal(500);
    expect(response.error.message).to.be.equal(errMsg);
    expect(response.error.trace).to.be.equal(error.stack);
  });
});
