const assert = require("assert");
const ups = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new ups.API();
        assert.strictEqual(Boolean(api.documentBaseUrl), true);
        assert.strictEqual(Boolean(api.locatorBaseUrl), true);
        assert.strictEqual(Boolean(api.shippingBaseUrl), true);
        assert.strictEqual(Boolean(api.trackingBaseUrl), true);
    });
});
