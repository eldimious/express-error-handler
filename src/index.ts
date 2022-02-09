import { Response, Request, NextFunction } from 'express';

function isHTTPErrorStatus(httpStatus: number): number | undefined {
  if (httpStatus < 600 && httpStatus >= 400) {
    return httpStatus;
  }
  return undefined;
}

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

const createExpressErrorResponse = (err: any, config: IExpressErrorHandlerConfig): IExpressErrorRespone => ({
  status: err.status,
  error: {
    message: err.message,
    trace: config.trace ? err.stack : undefined,
  },
});

export function errorHandler(config: IExpressErrorHandlerConfig = { trace: true }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (err: any, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> => {
    const httpErrorStatus = isHTTPErrorStatus(err.status) || 500;
    // eslint-disable-next-line no-param-reassign
    err.status = httpErrorStatus;
    return res.status(httpErrorStatus).json(createExpressErrorResponse(err, config));
  };
}
