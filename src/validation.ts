export function isHTTPErrorStatus(httpStatus: number): number | undefined {
  if (httpStatus < 600 && httpStatus >= 400) {
    return httpStatus;
  }
  return undefined;
}
