export const PickupAPI = superclass =>
    class extends superclass {
        /**
         * Retrieves the pickup base URL, normalizing it according to
         * the limitation of the UPS API.
         *
         * @returns {String} The normalized pickup base URL normalized and
         * ready to be used by API calls.
         */
        _getPickupBaseUrl() {
            // removes the trailing slash, as the API doesn't handle it properly
            return this.pickupBaseUrl.slice(0, this.pickupBaseUrl.length - 1);
        }

        async schedulePickup(payload, options = {}) {
            const response = await this.post(this._getPickupBaseUrl(), {
                kwargs: { auth: "headers" },
                ...options,
                dataJ: { PickupCreationRequest: payload }
            });
            return response;
        }
    };
