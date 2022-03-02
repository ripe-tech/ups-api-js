/*
 * The code representing an express shipment.
 */
export const EXPRESS_SERVICE_CODE = "007";

/*
 * The code representing a standard shipment.
 */
export const STANDARD_SERVICE_CODE = "011";

/*
 * The code representing a saver shipment.
 */
export const SAVER_SERVICE_CODE = "065";

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

/**
 * Represents pounds.
 */
export const LBS_TYPE = "LBS";

/**
 * The code for a shipment to hold at an UPS Access Point.
 */
export const SHIPMENT_HOLD_ACCESS_POINT = "01";

/**
 * The code for the PRL UPS return service.
 */
export const RETURN_PRL = "9";

/**
 * The code to send an in transit email notification.
 */
export const NOTIFY_IN_TRANSIT = "5";

/**
 * The code to send a package shipped email notification.
 */
export const NOTIFY_SHIP = "6";

/**
 * The code to send exception email notifications.
 */
export const NOTIFY_EXCEPTION = "7";

/**
 * The code to send a package delivered email notification.
 */
export const NOTIFY_DELIVERY = "8";

/**
 * The code to send a delivery email notification when the package is at the Access Point.
 */
export const NOTIFY_ACCESS_POINT_DELIVERY = "012";

/**
 * The code for a purchase order code value to
 * be used in reference number specification.
 */
export const PURCHASE_ORDER = "PO";

/**
 * The code for a production code code value to
 * be used in reference number specification.
 */
export const PRODUCTION_CODE = "PC";

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

        async cancelShipment(trackingNumber, options = {}) {
            const url = `${this.shippingBaseUrl}shipments/cancel/${trackingNumber}`;
            const response = await this.delete(url, {
                kwargs: { auth: "headers" },
                ...options
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

        async getWaybill(trackingNumber, { format = "pdf", ...options } = {}) {
            const url = this.shippingBaseUrl + "shipments/labels";
            const response = await this.post(url, {
                kwargs: { auth: "headers" },
                ...options,
                dataJ: {
                    LabelRecoveryRequest: {
                        TrackingNumber: String(trackingNumber),
                        LabelSpecification: {
                            LabelImageFormat: {
                                Code: format.toUpperCase()
                            }
                        }
                    }
                }
            });
            return response;
        }
    };
