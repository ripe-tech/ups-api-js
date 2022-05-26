# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

*

### Changed

* Removed node 10 and 11 from github workflow and added node 16, 17 and 18

### Fixed

* Fix eslint dependencies problems

## [0.4.1] - 2022-03-07

### Added

* More Shipment API constants
* `cancelShipment` method to void waybills - [ripe-pulse/#301](https://github.com/ripe-tech/ripe-pulse/issues/301)
* Tracking API status constants - [peri-shipping/#116](https://github.com/ripe-tech/peri-shipping/issues/116)

## [0.4.0] - 2022-02-21

### Added

* More Shipment API constants

## [0.3.2] - 2021-12-15

### Added

* Added `pounds` weight measurement code

### Fixed

* Fix UPS service codes to work with the Pickup API

## [0.3.1] - 2021-11-22

* Allow UPS API endpoint change through constructor params

## [0.3.0] - 2021-11-19

### Added

* UPS Locator API support to find nearest Access Point - [#10](https://github.com/ripe-tech/ups-api-js/pull/10)
* UPS Pickup API support to schedule pickups - [#13](https://github.com/ripe-tech/ups-api-js/pull/13)
* Label recovery endpoint to retrieve labels in multiple formats - [#12](https://github.com/ripe-tech/ups-api-js/pull/12)

### Fixed

* Package description - [#9](https://github.com/ripe-tech/ups-api-js/pull/9)

## [0.2.2] - 2021-10-18

### Fixed

* Issue with API version in URL

## [0.2.1] - 2021-07-06

### Changed

* Improved error handling using content type based parsing of payload

## [0.2.0] - 2021-05-20

### Changed

* Base URLs for production

## [0.1.0] - 2021-05-18

### Added

* Initial version
