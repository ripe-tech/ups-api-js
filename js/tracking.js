import { getXMLHeader, xmlToJson } from "./util";

export const TrackingAPI = superclass =>
    class extends superclass {
        getTrackingUrl(trackingNumber) {
            return `http://wwwapps.ups.com/WebTracking/processInputRequest?TypeOfInquiryNumber=T&InquiryNumber1=${trackingNumber}`;
        }

        async getTrackingDetails(trackingNumber, options = {}) {
            const url = `${this.trackingBaseUrl}details/${trackingNumber}`;
            const response = await this.get(url, {
                kwargs: { auth: "headers" },
                ...options
            });
            return response;
        }

        async getTrackingDetailsExtended(trackingNumber, options = {}) {
            const data = this._buildTrackingPayload(trackingNumber);
            const response = await this.post(this._getTrackingXmlBaseUrl(), {
                kwargs: { auth: "headers" },
                mime: "application/xml",
                data: data,
                ...options
            });
            const xml = await response.text();
            const result = xmlToJson(xml);
            return result;
        }

        _buildTrackingPayload(trackingNumber) {
            const xmlRequest =
                getXMLHeader(this.username, this.password, this.license) +
                `<?xml version="1.0"?>
                <TrackRequest>
                    <Request>
                        <RequestAction>Track</RequestAction>
                        <RequestOption>9</RequestOption>
                    </Request>
                    <TrackingNumber>${trackingNumber}</TrackingNumber>
                </TrackRequest>`;
            return xmlRequest;
        }
    };
