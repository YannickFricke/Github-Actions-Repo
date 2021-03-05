describe('Meine Tests', () => {
    it('Mein erster Test', () => {
        expect(true).toBe(true);
        expect(process.env.MEINE_UMGEBUNGS_VARIABLE).toEqual('TEST123');
    });
});
