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
            return {
                LocatorResponse: {
                    SearchResults: {}
                }
            };
        }
    };
