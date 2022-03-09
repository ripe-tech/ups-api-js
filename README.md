# UPS API for Javascript

The Javascript version of the UPS Shipping service.

```javascript
const upsApi = require("ups-api");

// instance the API client with defaults
const api = new upsApi.API({
    username: "myupsaccount",
    password: "myupsaccountpassword",
    license: "3F9955C3F789C255"
});

// example: request tracking information
const tracking = await api.getTrackingDetails("7798339175");
```

## Configuration

| Name                          | Type  | Default                                               | Description                                                                   |
| ----------------------------- | ----- | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| **UPS_DOCUMENT_BASE_URL**     | `str` | `https://filexfer.ups.com/rest/PaperlessDocumentAPI/` | The base URL that is going to be used for Paperless Document API connections. |
| **UPS_LOCATOR_BASE_URL**      | `str` | `https://onlinetools.ups.com/ups.app/xml/Locator/`    | The base URL that is going to be used for Locator API connections.            |
| **UPS_PICKUP_BASE_URL**       | `str` | `https://onlinetools.ups.com/ship/v1707/pickups/`     | The base URL that is going to be used for Pickup API connections.             |
| **UPS_SHIPPING_BASE_URL**     | `str` | `https://onlinetools.ups.com/ship/v1807/`             | The base URL that is going to be used for Shipping API connections.           |
| **UPS_TRACKING_BASE_URL**     | `str` | `https://onlinetools.ups.com/track/v1/`               | The base URL that is going to be used for Tracking API connections.           |
| **UPS_TRACKING_XML_BASE_URL** | `str` | `https://onlinetools.ups.com/ups.app/xml/Track/`      | The base URL that is going to be used for Tracking XML-based API connections. |
| **UPS_LICENSE**               | `str` | `None`                                                | The UPS API license to be used for authentication.                            |
| **UPS_USERNAME**              | `str` | `None`                                                | The UPS API username to be used for authentication                            |
| **UPS_PASSWORD**              | `str` | `None`                                                | The UPS API password to be used for authentication                            |

## License

UPS API for Javascript is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://app.travis-ci.com/ripe-tech/ups-api-js.svg?branch=master)](https://travis-ci.com/github/ripe-tech/ups-api-js)
[![Build Status GitHub](https://github.com/ripe-tech/ups-api-js/workflows/Main%20Workflow/badge.svg)](https://github.com/ripe-tech/ups-api-js/actions)
[![npm Status](https://img.shields.io/npm/v/ups-api.svg)](https://www.npmjs.com/package/ups-api)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)
