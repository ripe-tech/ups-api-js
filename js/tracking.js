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
    };
