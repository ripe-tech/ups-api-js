/*
 * The code representing an express shipment.
 */
export const EXPRESS_SERVICE_CODE = "07";

/*
 * The code representing a standard shipment.
 */
export const STANDARD_SERVICE_CODE = "11";

/*
 * The code representing a saver shipment.
 */
export const SAVER_SERVICE_CODE = "65";

/*
 * The code representing a shipment that is
 * charged via UPS account.
 */
export const TRANSPORTATION_CHARGE_TYPE = "01";

/**
 * The code representing a customer box
 * package.
 */
export const CUSTOMER_BOX_PACKAGING_TYPE = "02";

/**
 * The code representing a padded box
 * package.
 */
export const PAK_BOX_PACKAGING_TYPE = "03";

/**
 * The code representing an express box
 * package.
 */
export const EXPRESS_BOX_PACKAGING_TYPE = "21";

/**
 * Represents kilograms.
 */
export const KGS_TYPE = "KGS";

export const ShipmentAPI = superclass =>
    class extends superclass {
        async createShipment(payload, options = {}) {
            const url = this.shippingBaseUrl + "shipments";
            const response = await this.post(url, {
                kwargs: { auth: "headers" },
                ...options,
                dataJ: { ShipmentRequest: payload }
            });
            return response;
        }

        async addDocumentShipment(payload, options = {}) {
            const url = this._getDocumentBaseUrl();
            const response = await this.post(url, {
                kwargs: { auth: "dataJ" },
                ...options,
                dataJ: { PushToImageRepositoryRequest: payload }
            });
            return response;
        }
    };
