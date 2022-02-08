import { Response, Request, NextFunction } from 'express';
import { isHTTPErrorStatus } from './validation';

export interface IExpressErrorRespone {
  status: number,
  error: {
    message?: string,
    code?: string,
    trace? :string,
  }
}

export interface IExpressErrorHandlerConfig {
  trace: boolean,
}

const createResponseError = (err: any, config: IExpressErrorHandlerConfig): IExpressErrorRespone => ({
  status: err.status,
  error: {
    message: err.message,
    trace: config.trace ? err.stack : undefined,
  },
});

export default function errorHandler(config: IExpressErrorHandlerConfig = { trace: true }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (err: any, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
    const httpErrorStatus = isHTTPErrorStatus(err.status) || 500;
    err.status = httpErrorStatus;
    return res.status(httpErrorStatus).json(createResponseError(err, config));
  };
}
