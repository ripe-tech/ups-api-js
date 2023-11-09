export const ACCESS_POINT_SEARCH = "64";

export const CLOSEST_POINT_SEARCH = "01";

export const LocatorAPI = superclass =>
    class extends superclass {
        /**
         * Finds the nearest UPS Access Point to a given address.
         *
         * @param {String} addressLine The address from where the distance is measured.
         * @param {String} city The city from where the distance is measured.
         * @param {String} postalCode The postalCode from where the distance is measured.
         * @param {String} countryCode The countryCode from where the distance is measured.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async getNearestAccessPoint(addressLine, city, postalCode, countryCode, options = {}) {
            const url = `${this.baseUrl}locations/${this.version}/search/availabilities/${ACCESS_POINT_SEARCH}`;
            const payload = this._buildNearestAccessPointPayload(
                addressLine,
                city,
                postalCode,
                countryCode,
                options
            );
            const response = await this.post(url, {
                ...options,
                dataJ: payload
            });
            return response;
        }

        _buildNearestAccessPointPayload(
            addressLine,
            city,
            postalCode,
            countryCode,
            { consignee = null, locale = "en_US", metric = true, radius = 150 } = {}
        ) {
            const payload = {
                LocatorRequest: {
                    Request: {
                        RequestAction: "Locator",
                        RequestOption: ACCESS_POINT_SEARCH
                    },
                    OriginAddress: {
                        AddressKeyFormat: {
                            ConsigneeName: consignee,
                            AddressLine: addressLine,
                            PoliticalDivision2: city,
                            PostcodePrimaryLow: postalCode,
                            CountryCode: countryCode
                        }
                    },
                    Translate: {
                        Locale: locale
                    },
                    UnitOfMeasurement: { Code: metric ? "KM" : "MI" },
                    SortCriteria: { SortType: CLOSEST_POINT_SEARCH }
                }
            };
            return payload;
        }
    };
