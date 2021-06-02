export const TrackingAPI = superclass =>
    class extends superclass {
        getTrackingUrl(trackingNumber) {
            return `http://wwwapps.ups.com/WebTracking/processInputRequest?TypeOfInquiryNumber=T&InquiryNumber1=${trackingNumber}`;
        }

        async getPackageStatus(trackingNumber, options = {}) {
            const url = `${this.trackingBaseUrl}details/${trackingNumber}`;
            const response = await this.get(url, {
                kwargs: { auth: "headers" },
                ...options
            });
            return response.trackResponse.shipment[0].package[0].activity[0].status.type;
        }
    };
