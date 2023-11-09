# UPS API for Javascript

The Javascript version of the UPS Shipping service.

```javascript
const upsApi = require("ups-api");

// instance the API client with defaults
const api = new upsApi.API({
    clientId: "myUpsAppClientId",
    clientSecret: "myUpsAppClientSecret"
});

// example: request tracking information
const tracking = await api.getTrackingDetails("7798339175");
```

## Configuration

| Name                    | Type  | Default                              | Description                                            |
| ----------------------- | ----- | ------------------------------------ | ------------------------------------------------------ |
| **UPS_AUTH_URL**        | `str` | `"https://onlinetools.ups.com/"`     | The base auth URL used for the OAuth token request.    |
| **UPS_BASE_URL**        | `str` | `"https://onlinetools.ups.com/api/"` | The base URL used for API requests.                    |
| **UPS_API_VERSION**     | `str` | `"v1"`                               | The version of the API to use.                         |
| **UPS_CLIENT_ID**       | `str` | `None`                               | The application client ID to obtain the token.         |
| **UPS_CLIENT_SECRET**   | `str` | `None`                               | The application client secret to obtain the token.     |
| **UPS_GRANT_TYPE**      | `str` | `"client_credentials"`               | The application grant type to obtain the token.        |
| **UPS_TOKEN**           | `str` | `None`                               | The token granted by the OAuth request.                |
| **UPS_TRANSACTION_SRC** | `str` | `None`                               | The transaction source to be added to request headers. |

## License

UPS API for Javascript is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://app.travis-ci.com/ripe-tech/ups-api-js.svg?branch=master)](https://travis-ci.com/github/ripe-tech/ups-api-js)
[![Build Status GitHub](https://github.com/ripe-tech/ups-api-js/workflows/Main%20Workflow/badge.svg)](https://github.com/ripe-tech/ups-api-js/actions)
[![npm Status](https://img.shields.io/npm/v/ups-api.svg)](https://www.npmjs.com/package/ups-api)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)
