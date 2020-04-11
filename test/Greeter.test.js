const Greeter = artifacts.require("Greeter");

contract('Greeter', (accounts) => {
    before(async () => {
        this.greeter = await Greeter.deployed();
    });

    it('deploys successfully', async () => {
        const address = await this.greeter.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
    });

    it('gets data', async () => {
        const data = await this.greeter.greeting();
        assert.notEqual(data, '');
        assert.notEqual(data, null);
        assert.notEqual(data, undefined);
        assert.equal(data, 'Hello World!');
    });

    it('sets data', async () => {
        const input = "input";
        const result = await this.greeter.set(input);
        const event = result.logs[0].args;
        const data = event.greeting;
        assert.notEqual(data, '');
        assert.notEqual(data, null);
        assert.notEqual(data, undefined);
        assert.notEqual(data, 'Default Data');
        assert.equal(data, input);
    });
});
