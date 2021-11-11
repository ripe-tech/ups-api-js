import { getXMLHeader, xmlToJson } from "./util";

export const TrackingAPI = superclass =>
    class extends superclass {
        getTrackingUrl(trackingNumber) {
            return `http://wwwapps.ups.com/WebTracking/processInputRequest?TypeOfInquiryNumber=T&InquiryNumber1=${trackingNumber}`;
        }

        async getTrackingDetails(trackingNumber, options = {}) {
            const xmlRequest = this._buildTrackingRequest(trackingNumber);
            const response = await this.post(this.trackingBaseUrl, {
                kwargs: { auth: "headers" },
                mime: "application/xml",
                data: xmlRequest,
                ...options
            });
            const xmlResponse = await response.text();
            const jsonResponse = xmlToJson(xmlResponse);
            return jsonResponse;
        }

        _buildTrackingRequest(trackingNumber) {
            const xmlRequest =
                getXMLHeader(this.username, this.password, this.license) +
                `<?xml version="1.0"?>
                <TrackRequest>
                    <Request>
                        <RequestAction>Track</RequestAction>
                        <RequestOption>8</RequestOption>
                    </Request>
                    <TrackingNumber>${trackingNumber}</TrackingNumber>
                </TrackRequest>`;
            return xmlRequest;
        }
    };
