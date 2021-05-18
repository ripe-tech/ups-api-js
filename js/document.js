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

export const DocumentAPI = superclass =>
    class extends superclass {
        async createDocument(payload, options = {}) {
            const url = this._getDocumentBaseUrl();
            const response = await this.post(url, {
                kwargs: { auth: "dataJ" },
                ...options,
                dataJ: { UploadRequest: payload }
            });
            return response;
        }
    };
