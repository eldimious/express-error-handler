<h1 align="center">Welcome to @dimosbotsaris/express-error-handler 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@dimosbotsaris/express-error-handler" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@dimosbotsaris/express-error-handler.svg">
  </a>
  <img src="https://img.shields.io/badge/npm-%3E%3D7.13.0-blue.svg" />
  <a href="https://github.com/eldimious/express-error-handler#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/eldimious/express-error-handler/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>

  <a href="https://twitter.com/el_dimious" target="_blank">
    <img alt="Twitter: el_dimious" src="https://img.shields.io/twitter/follow/el_dimious.svg?style=social" />
  </a>
</p>

> Simple middleware to handle errors for JSON APIs in development and production environments.


## Install

```sh
npm install --save @dimosbotsaris/express-error-handler
```

## Usage

```sh
import errorHandler from '../../test';

app.get('/bar', (req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Validation Error');
  error.status = 400;
  next(error);
});

app.use(errorHandler({}));
```

## Options

  
| Option | Type | Default | Description  |
| ------ |------|---------| ------------ |
| trace| Boolean | `false` | If `true` the trace is attached to output. |

## Run tests

```sh
npm run test
```

## Author

👤 **Dimos Botsaris**

* Website: https://www.eldimious.com
* Twitter: [@el_dimious](https://twitter.com/el_dimious)
* Github: [@eldimious](https://github.com/eldimious)
* LinkedIn: [@dimosthenis-botsaris-5ab16485](https://www.linkedin.com/in/dimosthenis-botsaris-5ab16485/)

## Support Me

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y797KCA)

## Show your support

Give a ⭐️ if this project helped you!
