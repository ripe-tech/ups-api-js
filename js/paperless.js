export const SMALL_PACKAGE_SHIPMENT_TYPE = "1";
export const FREIGHT_SHIPMENT_TYPE = "2";

export const AUTH_FORM_DOC_TYPE = "001";
export const INVOICE_DOC_TYPE = "002";
export const CERTIFICATE_ORIGIN_DOC_TYPE = "003";
export const EXPORT_ACCOMPANYING_DOC_TYPE = "004";
export const EXPORT_LICENSE_DOC_TYPE = "005";
export const IMPORT_PERMIT_DOC_TYPE = "006";
export const ONE_TIME_NAFTA_DOC_TYPE = "007";
export const OTHER_DOC_TYPE = "008";
export const POWER_ATTORNEY_DOC_TYPE = "009";
export const PACKING_LIST_DOC_TYPE = "010";
export const SED_DOC_TYPE = "011";
export const LETTER_INSTRUCTION_DOC_TYPE = "012";
export const DECLARATION_DOC_TYPE = "013";

export const PaperlessAPI = superclass =>
    class extends superclass {
        /**
         * Uploads a document to the UPS servers.
         * The uploaded document is returned and its ID can be
         * used to associate a shipment with the document.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        async createDocument(payload, options = {}) {
            const url = `${this.baseUrl}paperlessdocuments/${this.version}/upload`;
            const response = await this.post(url, {
                ...options,
                dataJ: { UploadRequest: payload }
            });
            return response;
        }

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
