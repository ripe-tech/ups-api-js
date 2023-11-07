export const PaperlessAPI = superclass =>
    class extends superclass {
        /**
         * Adds the already uploaded documents in the UPS servers to an
         * existing shipment.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async addDocumentShipment(payload, options = {}) {
            const url = `${this.baseUrl}paperlessdocuments/${this.version}/image`;
            const response = await this.post(url, {
                ...options,
                dataJ: { PushToImageRepositoryRequest: payload }
            });
            return response;
        }
    };
