export const PickupAPI = superclass =>
    class extends superclass {
        /**
         * Schedules a pickup for a parcel.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async schedulePickup(payload, options = {}) {
            const response = await this.post(this._getPickupBaseUrl(), {
                kwargs: { auth: "headers" },
                ...options,
                dataJ: { PickupCreationRequest: payload }
            });
            return response;
        }
    };
