export const PickupAPI = superclass =>
    class extends superclass {
        async schedulePickup(payload, options = {}) {
            const response = await this.post(this._getPickupBaseUrl(), {
                kwargs: { auth: "headers" },
                ...options,
                dataJ: { PickupCreationRequest: payload }
            });
            return response;
        }
    };
