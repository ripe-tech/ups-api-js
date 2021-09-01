<h1>UPS API</h1>

The Javascript version of the UPS Shipping service.

## Configuration

| Name                      | Type  | Default                                               | Description                                                                   |
| ------------------------- | ----- | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| **UPS_SHIPPING_BASE_URL** | `str` | `https://onlinetools.ups.com/ship/v1807/`             | The base URL that is going to be used for Shipping API connections.           |
| **UPS_DOCUMENT_BASE_URL** | `str` | `https://filexfer.ups.com/rest/PaperlessDocumentAPI/` | The base URL that is going to be used for Paperless Document API connections. |
| **UPS_ACCOUNT**           | `str` | `None`                                                | The number of the UPS account to use.                                         |
| **UPS_LICENSE**           | `str` | `None`                                                | The UPS API license to be used for authentication.                            |
| **UPS_USERNAME**          | `str` | `None`                                                | The UPS API username to be used for authentication                            |
| **UPS_PASSWORD**          | `str` | `None`                                                | The UPS API password to be used for authentication                            |

## License

UPS API Javascript is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://app.travis-ci.com/ripe-tech/ups-api-js.svg?branch=master)](https://travis-ci.com/github/ripe-tech/ups-api-js)
[![Build Status GitHub](https://github.com/ripe-tech/ups-api-js/workflows/Main%20Workflow/badge.svg)](https://github.com/ripe-tech/ups-api-js/actions)
[![npm Status](https://img.shields.io/npm/v/ups-api.svg)](https://www.npmjs.com/package/ups-api)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)
