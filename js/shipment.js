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
            // swaps the target format if it is PDF for PNG
            // due to the limitations of the UPS API
            const format = payload.LabelSpecification.LabelImageFormat.Code.toUpperCase();
            if (format === "PDF") payload.LabelSpecification.LabelImageFormat.Code = "PNG";

            const url = this.shippingBaseUrl + "shipments";
            const response = await this.post(url, {
                kwargs: { auth: "headers" },
                ...options,
                dataJ: { ShipmentRequest: payload }
            });

            // requests a PDF copy of the PNG label and
            // returns it making it seamless for the user
            if (format === "PDF") {
                const trackingNumber =
                    response.ShipmentResponse.ShipmentResults.ShipmentIdentificationNumber;
                const waybill = await this.getWaybill(trackingNumber, { format: format });
                const labelImage = waybill.LabelRecoveryResponse.LabelResults.LabelImage;
                response.ShipmentResponse.ShipmentResults.PackageResults.ShippingLabel = {
                    ImageFormat: {
                        Code: format
                    },
                    GraphicImage: labelImage.GraphicImage
                };
            }

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
