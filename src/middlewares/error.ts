'use strict';

export default (err: Error, req: any, res: any) => {
  // Winston logger, or somethin else can be added here
  console.error(err);
  res.status(500);
};
