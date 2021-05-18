const assert = require("assert");
const ups = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new ups.API();
        assert.strictEqual(Boolean(api.UPS_SHIPPING_BASE_URL), true);
        assert.strictEqual(Boolean(api.UPS_DOCUMENT_BASE_URL), true);
    });
});
