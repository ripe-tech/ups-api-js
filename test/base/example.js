const assert = require("assert");

describe("Example", function() {
    describe("#example()", function() {
        it("should be able to run simple tests", () => {
            assert.strictEqual(1, 1);
            assert.strictEqual("hello", "hello");
        });
    });
});
