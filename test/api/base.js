const assert = require("assert");
const ups = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new ups.API();
        assert.strictEqual(Boolean(api.authUrl), true);
        assert.strictEqual(Boolean(api.baseUrl), true);
    });
});
